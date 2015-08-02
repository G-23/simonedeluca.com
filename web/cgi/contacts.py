print 'Content-Type: text/plain'
print ''

import cgi, cgitb

from google.appengine.api import mail

form = cgi.FieldStorage() 

email = form.getvalue('email') 
message = form.getvalue('message') 

if not email or not message:
    print 'err: Oops, Every field is required!'
else:
    msg = mail.EmailMessage(sender = '************', subject = 'Contact from Simonedeluca.com')
    msg.to = '************,'
    msg.body = 'EMAIL: %s\n\nMESSAGE:\n%s' % (email,message)
    msg.send()
    print 'ok: Whoop, Message received!'