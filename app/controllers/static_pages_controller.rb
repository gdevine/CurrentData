class StaticPagesController < ApplicationController
 
  def overview
  end

  def help
  end
  
  def about
  end
  
  def contact
  end
  
  def hiev_stats
    render :template => "static_pages/hiev/hiev_stats"
  end
  
  def eucface
    render :template => "static_pages/eucface/eucface_main"
  end

  def eucface_camera
    render :template => "static_pages/eucface/eucface_camera"
  end
end
