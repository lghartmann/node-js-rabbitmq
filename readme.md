I followed the instructions in this video:

https://www.youtube.com/watch?v=Cie5v59mrTg

to create a basic rabbitmq server with a publisher and a consumer.

I also found in another video (https://www.youtube.com/watch?v=2YWHtbZJ0QI, it's in portuguese) about `https://tryrabbitmq.com/`, a great way to play with how rabbit mq's excahnges work.

# Setup

first you need docker:

open a terminal and type `docker` and press enter

if the terminal sends you a hello from docker your installation is successfull

after that run

`docker run --name container_name -p XXXX:5672 rabbitmq`

this command will tell docker to first download the rabbitmq image if your computer doesn't have it already, then docker will start a container based on this downloaded image with the name "container_name" you can put anything as your container name (don't use spaces to separate words), the flag -p will bridge the rabbitmq container default exposed port 5672 to a local port XXXX (make sure to set a unused port as a local port). Remember, when setting up a container what comes before `:` is the HOST port (our machine's local port) and after is the container exposed port.

If you have any trouble setting up your container remember to search for the errors you're finding.

After setting up your container, inside the project's folder run

`npm i`

To send your first message using rabbitmq run:

`npm run dev "message here"`
