get '/' do
  erb :index
end

post '/create' do
  @note = Note.create(params)
  erb :index
end

get '/update' do
  @note_update = Note.find(params[:id])
  puts params[:id]
  puts @note_update
end

post '/update' do
  note = Note.find(params[:id].to_i)
  note.title = params[:title]
  note.content = params[:content]
  note.save
  erb :index
end
