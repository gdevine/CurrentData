require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
  def setup
    @user = User.new(firstname: "John", surname:"Doe", email: "johndoe@example.com", password:"dummypassword")
  end

  test "should be valid" do
    assert @user.valid?
  end
  
  test "firstname should be present" do
    @user.firstname = "     "
    assert_not @user.valid?
  end
  
  test "firstname should be 30 chars max" do
    @user.firstname = "a"*31
    assert_not @user.valid?
  end
  
  test "firstname should not contain any numbers" do
    @user.firstname = "aa33aa"
    assert_not @user.valid?
  end
  
  test "surname should be present" do
    @user.surname = "     "
    assert_not @user.valid?
  end
  
  test "surname should be 30 chars max" do
    @user.surname = "a"*31
    assert_not @user.valid?
  end
  
  test "surname should not contain any numbers" do
    @user.surname = "aa33aa"
    assert_not @user.valid?
  end
  
  test "email should be present" do
    @user.email = "     "
    assert_not @user.valid?
  end
  
  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end
  
  test "email should be 80 chars max" do
    @user.email = "a"*81
    assert_not @user.valid?
  end
  
  test "email addresses should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = @user.email.upcase
    @user.save
    assert_not duplicate_user.valid?
  end
  
  test "password should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5
    assert_not @user.valid?
  end
  
end
