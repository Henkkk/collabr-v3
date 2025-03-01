import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Send notification email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Notifications <onboarding@resend.dev>', // Update with your verified domain
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com', // The email where you want to receive notifications
      subject: 'Collabr - New Member Application',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; margin-bottom: 24px;">New Member Application</h2>
          <p style="margin-bottom: 16px;">You have received a new member application from:</p>
          <div style="background-color: #f4f4f4; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; font-weight: bold;">${email}</p>
          </div>
          <p style="color: #666; font-size: 14px;">This is an automated notification from your website.</p>
        </div>
      `,
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    console.log('Email notification sent successfully:', data?.id);
    
    return NextResponse.json(
      { success: true, message: 'Notification sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
} 