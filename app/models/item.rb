class Item < ActiveRecord::Base
  has_many :comments
  validates :price, presence: true

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
