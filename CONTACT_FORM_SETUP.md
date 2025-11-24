# Contact Form Setup Guide

## How Contact Form Works

### 📬 Where You'll Receive Messages

Your contact form submissions can be received in **3 ways**:

#### 1. **EmailJS (Recommended - Free)**
- Sends emails directly to your inbox: `mdsifatss79@gmail.com`
- **Free Plan**: 200 emails per month
- Setup takes 5 minutes

#### 2. **Browser Storage (Always Active)**
- All messages are automatically saved in browser localStorage
- Access them at: `http://localhost:5174/admin/messages`
- Works even if email service fails

#### 3. **Fallback: Email Client**
- If EmailJS fails, opens user's default email app
- Pre-fills your email with their message

---

## 🚀 Quick Setup (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" (Free)
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Select **Gmail** (or your email provider)
4. Connect your account: `mdsifatss79@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form: {{subject}}
```

**Body:**
```
You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abcXYZ123`)

### Step 5: Update Your Code
Open `src/components/ContactForm.jsx` and replace these lines (around line 22-24):

```javascript
service_id: 'YOUR_SERVICE_ID',     // Replace with your Service ID
template_id: 'YOUR_TEMPLATE_ID',   // Replace with your Template ID
user_id: 'YOUR_PUBLIC_KEY',        // Replace with your Public Key
```

**Example:**
```javascript
service_id: 'service_abc123',
template_id: 'template_xyz789',
user_id: 'user_abcXYZ123',
```

### Step 6: Test
1. Run your portfolio: `npm run dev`
2. Go to Contact page
3. Fill and submit the form
4. Check your email: `mdsifatss79@gmail.com`

---

## 📊 View All Messages

### Access Admin Dashboard
- **URL**: `http://localhost:5174/admin/messages`
- Or when deployed: `https://your-domain.com/admin/messages`

### Features:
- ✅ View all contact form submissions
- ✅ See delivery status (delivered/pending)
- ✅ Read full message details
- ✅ Reply directly via email
- ✅ Copy email addresses and messages
- ✅ Delete old messages
- ✅ Export all messages as JSON

---

## 🔒 Security Note

**Important**: The admin page is currently public. For production, add password protection:

### Option 1: Simple Password Check
Add this to `AdminMessages.jsx`:

```javascript
const [authenticated, setAuthenticated] = useState(false)
const [password, setPassword] = useState('')

if (!authenticated) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={(e) => {
        e.preventDefault()
        if (password === 'YourSecretPassword123') {
          setAuthenticated(true)
        } else {
          alert('Wrong password')
        }
      }}>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
```

### Option 2: Use Authentication Service
- Firebase Authentication
- Auth0
- AWS Cognito

---

## 📱 How to Respond to Messages

### Method 1: Direct Reply (Recommended)
1. Go to `/admin/messages`
2. Click on a message
3. Click "📧 Reply" button
4. Your email client opens with pre-filled reply

### Method 2: Manual Response
1. Copy the person's email from admin dashboard
2. Compose email in Gmail/Outlook
3. Reference their subject line

---

## 🌐 When You Deploy

### If Using Vercel/Netlify:
- localStorage works on any device you use to access `/admin/messages`
- EmailJS works automatically (no backend needed)
- Each visitor's form submissions will be sent to your email

### If Using Custom Domain:
- Update EmailJS allowed domains in your dashboard
- Add your domain (e.g., `sifat-portfolio.com`)

---

## 💡 Tips

1. **Check Spam Folder**: First few EmailJS emails might go to spam
2. **Add to Contacts**: Add `noreply@emailjs.com` to contacts
3. **Bookmark Admin**: Save `/admin/messages` URL for easy access
4. **Mobile Access**: Admin dashboard is mobile-responsive
5. **Export Regularly**: Download messages as backup

---

## 🆘 Troubleshooting

### "Message sent successfully" but no email?
- Check EmailJS dashboard for error logs
- Verify Service ID, Template ID, Public Key are correct
- Check spam/junk folder
- Verify email service is connected in EmailJS

### Admin page shows no messages?
- Messages are stored per-browser
- Use same browser/device you used for testing
- Check browser console for localStorage errors

### Fallback email opens instead?
- EmailJS credentials not configured yet
- Network issue (check internet)
- EmailJS free limit reached (200/month)

---

## 📧 Your Email Configuration

**Receiving Email**: `mdsifatss79@gmail.com`  
**Phone**: `+880 1609084651`  
**Admin Dashboard**: `/admin/messages`

---

## Free Alternatives to EmailJS

If you prefer other services:

1. **Formspree** - https://formspree.io (50 submissions/month free)
2. **Web3Forms** - https://web3forms.com (250/month free)
3. **FormSubmit** - https://formsubmit.co (Unlimited, email-based)
4. **Getform** - https://getform.io (50/month free)

All work similarly - just replace the API endpoint in ContactForm.jsx

---

## Need Help?

Contact form is ready to use! Messages will be:
1. ✅ Saved in browser (always works)
2. ✅ Opens email client as fallback
3. ⏳ Sent via EmailJS (after you set it up)

**Setup time**: ~5 minutes for EmailJS
**Cost**: FREE (200 emails/month)
