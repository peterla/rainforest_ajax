# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create(name: "StarCraft II: Wings of Liberty", description: "StarCraft II: Wings of Liberty is the sequel to Blizzard Entertainment's 1998 hit StarCraft, which has been hailed by players and critics worldwide as one of the top real-time strategy games of all time.", price_in_cents: 5999)
Product.create(name: "StarCraft II: Heart of the Swarm Expansion Pack", description: "StarCraft II: Heart of the Swarm is the first expansion to the 2010 release of the heralded Real-Time strategy game, StarCraft II: Wings of Liberty.", price_in_cents: 3999)
Product.create(name: "Starcraft II: Legacy of the Void - Standard Edition", description: "StarCraft II: Legacy of the Void is the final chapter in the epic scifi storyline spanning the StarCraft II trilogy.", price_in_cents: 3999)
