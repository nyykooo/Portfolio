<template>
    <div class="project__container">
        <div class="text__area">
            <span style="font-size: 24px; color: white;">
                <strong>Minitalk</strong> is a project about communication between processes, there is a <strong>server process</strong> and a <strong>client process</strong>. The idea of the project is to get the client to send a message and the server to print it out on the terminal. In the bonus part, after the server prints the message, the client must be notified and show a success message.
                <br><br>
                To do this, we use <strong>posix signals</strong>, more specifically <strong>SIGUSR1</strong> and <strong>SIGUSR2</strong>, which have no predefined behavior. To send and receive these signals, we use the <strong>kill</strong> and <strong>sigaction</strong> functions.
                <br><br>
                The information is sent bit by bit, byte by byte (i.e. char by char), and this has allowed me to deepen my knowledge of <strong>bitwise operators</strong> and <strong>bitshifting</strong>.
            </span> 
        </div>
        <div class="social__media">
            <a href="https://github.com/nyykooo/minitalk" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/github.png" class="image_icons"/> Minitalk
            </a>
        </div>
    </div>
</template>
