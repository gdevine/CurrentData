require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "HIE Current Data | Home"
  end

  test "should get help" do
    get :help
    assert_response :success
    assert_select "title", "HIE Current Data | Help"
  end
 
  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "HIE Current Data | About"
  end 
  
  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "HIE Current Data | Contact"
  end
  

end
