require 'faker'
require 'csv'

class NotesImporter
  def self.import(filename)
    csv = CSV.new(File.open(filename))
    csv.each do |row|
      	puts "ROW: #{row}"
	  	note = Note.create
	  	note.content = row[1]
	  	note.title = row[2]
	  	note.save
    end
  end
end

NotesImporter.import("#{APP_ROOT}/db/litemind-quotes.csv")