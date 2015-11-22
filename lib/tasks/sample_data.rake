namespace :db do
  desc "Fill our db with sample data"
  task populate: :environment do
    Item.create!(title: 'example',
                price: 12)
    40.times do
      title = Faker::Commerce.product_name
      price = 20 + Random.rand(11)
      Item.create!(title: title,
                  price: price)
    end
  end
end