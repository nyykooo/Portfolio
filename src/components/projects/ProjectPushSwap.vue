<template>
    <div class="project__container">
        <div class="text__area">   
            <span style="font-size: 24px; color: white;">
                <strong>PushSwap</strong> is a program that receives a list of numbers and has to <strong>sort</strong> them in ascending order. To do this, it must use <strong>2 stacks</strong> and a series of pre-defined movements involving pushes, swaps and rotations.
                <br><br>
                To sort the list I used the <strong>Radix sorting algorithm</strong> adapted for 2 stacks, which consists of sorting the least significant bit at each iteration, and at the end of it performing a bitshifiting to sort the next bit.
                <br><br>
                The good thing about using this algorithm is that the <strong>number of moves</strong> for a certain number “n” of values in the list <strong>will always be the same</strong>, regardless of how these values are shuffled. This makes the results of the program <strong>stable</strong>, and for very large “n” values the program performs exceptionally well, but for smaller “n” values the program performs only reasonably well.
            </span>
        </div>
        <div class="contacts__container">
            <a href="https://github.com/nyykooo/push_swap" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/github.png" class="image_icons"/> Push Swap
            </a>
        </div>
    </div>
</template>