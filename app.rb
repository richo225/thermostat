require 'sinatra/base'
require 'json'


# $.post('http://localhost:4567/temp',{temp: temp, city: city}, function(){})


class Thermostat < Sinatra::Base
set :public_folder, 'public_folder'

before do
   headers 'Access-Control-Allow-Origin' => '*'
 end

 get '/' do
   File.open('index6.html')
 end

 post '/temp' do
   @@temp = params[:temp] if params[:temp]
   @@city = params[:city] if params[:city]
 end

 get '/temp' do
   
 end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
