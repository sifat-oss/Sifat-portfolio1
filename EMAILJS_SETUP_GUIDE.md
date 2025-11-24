# EmailJS Setup Guide for Your Portfolio

## 🎯 What This Does
When someone fills your contact form, you'll receive an email at **mdsifatss79@gmail.com** and can reply directly to them.

---

## 📧 Step 1: Access Your EmailJS Dashboard

1. Go to: **https://dashboard.emailjs.com/admin**
2. Login with your EmailJS account

---

## ⚙️ Step 2: Verify Email Service (Gmail Connection)

1. Click **"Email Services"** in the left sidebar
2. You should see service: **service_gezqkli**
3. Status should be: ✅ **Connected** (green)
4. If NOT connected:
   - Click "Add New Service"
   - Choose "Gmail"
   - Click "Connect Account"
   - Login with: **mdsifatss79@gmail.com**
   - Allow EmailJS permissions

---

## 📝 Step 3: Configure Email Template

### Go to Template:
**https://dashboard.emailjs.com/admin/templates/19je095/**

### Template Settings (Top Section):

| Field | Value |
|-------|-------|
| **Template Name** | Portfolio Contact Form |
| **From Name** | `{{from_name}}` |
| **From Email** | `noreply@emailjs.com` |
| **To Email** | `mdsifatss79@gmail.com` |
| **Bcc** | (leave empty) |
| **Reply To** | `{{from_email}}` ⭐ IMPORTANT! |
| **Subject** | `New Portfolio Inquiry: {{subject}}` |

### Template Content (Message Body):

Copy and paste this exactly:

```
Hello Sifat,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ To reply, simply hit "Reply" in your email client.
Your reply will go directly to: {{from_email}}

---
Sent from: https://sifat-oss.github.io/Sifat-portfolio1/
```

### Click **"Save"** button (top right)

---

## 🧪 Step 4: Test Your Template

1. In the template editor, click **"Test it"** button (top right)
2. Fill in the test form:
   - **from_name**: `Test Client`
   - **from_email**: `testclient@gmail.com`
   - **subject**: `Website Development Inquiry`
   - **message**: `Hi, I need a website for my business. Please send me a quote.`
3. Click **"Send Test Email"**
4. Check your inbox: **mdsifatss79@gmail.com**
5. You should receive an email within 1-2 minutes
6. Click "Reply" - it should automatically address to `testclient@gmail.com`

---

## 🌐 Step 5: Test on Live Website

1. Open: **https://sifat-oss.github.io/Sifat-portfolio1/#/contact**
2. Fill out the contact form with real data
3. Click "Send Message"
4. You should see: ✅ **"Message sent successfully!"**
5. Check **mdsifatss79@gmail.com** inbox (check spam folder if not in inbox)

---

## 📊 Step 6: View All Messages (Backup Dashboard)

Even if EmailJS fails, all form submissions are saved locally. To view them:

1. Go to: **https://sifat-oss.github.io/Sifat-portfolio1/#/admin/messages**
2. You'll see all contact form submissions
3. You can reply, delete, or export messages

---

## ✅ Verification Checklist

- [ ] EmailJS dashboard login works
- [ ] Gmail service (service_gezqkli) is connected
- [ ] Template 19je095 exists
- [ ] Template "To Email" is set to: mdsifatss79@gmail.com
- [ ] Template "Reply To" is set to: {{from_email}}
- [ ] Test email sent successfully
- [ ] Test email received in inbox
- [ ] Reply-to address works correctly
- [ ] Live website form tested
- [ ] Email notification received

---

## 🔧 Your Current Configuration

Your portfolio is already configured with:

- **Service ID**: `service_gezqkli`
- **Template ID**: `19je095`
- **Public Key**: `WyNeBbSvohX6vVjqM`
- **Recipient**: `mdsifatss79@gmail.com`

These are hardcoded in: `src/components/ContactForm.jsx`

---

## 💡 How Reply Works

1. Client fills form with their email: `client@example.com`
2. EmailJS sends you email at: `mdsifatss79@gmail.com`
3. Email appears in your inbox with:
   - **From**: EmailJS (noreply@emailjs.com)
   - **Reply-To**: `client@example.com` ⭐
4. You click "Reply" in Gmail
5. Gmail automatically addresses reply to: `client@example.com`
6. Client receives your reply directly!

---

## 🚨 Troubleshooting

### Problem: Not receiving emails
- Check Gmail **Spam/Junk** folder
- Verify service is connected (green checkmark)
- Verify "To Email" is: mdsifatss79@gmail.com
- Check EmailJS free plan limit (200 emails/month)

### Problem: Can't reply to sender
- Verify "Reply To" field is: `{{from_email}}`
- Check if sender email is valid

### Problem: "Failed to send" error
- Open browser console (F12) to see error details
- Verify Service ID, Template ID, Public Key match
- Check if EmailJS service is active

### Problem: Template variables not working
- Make sure variables are wrapped in double curly braces: `{{variable}}`
- Variables must match exactly: `from_name`, `from_email`, `subject`, `message`

---

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Your EmailJS Dashboard: https://dashboard.emailjs.com/admin
- Free Plan: 200 emails/month
- If you exceed limit, upgrade to paid plan or emails will be blocked

---

## 🎉 Success!

Once configured, your portfolio contact form will:
✅ Send you instant email notifications
✅ Allow direct reply to clients
✅ Backup all messages to localStorage
✅ Show admin dashboard at /#/admin/messages
✅ Help you get freelance clients and make money! 💰

**Your Portfolio**: https://sifat-oss.github.io/Sifat-portfolio1/
**Contact Form**: https://sifat-oss.github.io/Sifat-portfolio1/#/contact
**Admin Panel**: https://sifat-oss.github.io/Sifat-portfolio1/#/admin/messages
