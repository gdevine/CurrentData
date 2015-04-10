module ApplicationHelper
  
  # Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "HIE Current Data"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
  
  # Is the given link the current page?
  def is_active?(link_path)
    current_page?(link_path)
  end
    
end
