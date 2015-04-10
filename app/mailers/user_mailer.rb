class UserMailer < ActionMailer::Base
  default from: 'notifications@hiecurrentdata.com'
 
  def welcome_email(user)
    @user = user
    @url  = 'http://currentdata@uws.edu.au'
    mail(to: @user.email, subject: 'Welcome to HIE Current Data')
  end
  
  def new_user_waiting_for_approval(user)
    mail(to: 'g.devine@uws.edu.au', subject: 'HIE Current Data Registration Request')
  end
  
end
