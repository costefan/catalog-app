namespace :db do
  desc "Fill our db with sample data"
  task populate: :environment do
    Item.create!(title: 'example',
                price: 12)
    4.times do |n|
      title = Faker::Name.name
      price = 20 + Random.rand(11)
      Item.create!(title: title,
                  price: price)
    end
  end
end