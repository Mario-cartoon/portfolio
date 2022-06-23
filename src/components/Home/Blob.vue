<template>
    <div class="blob">
        <svg viewBox="200 -100 500 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <g transform="translate(186, -57)">
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: #b620e0;"></stop>
                    <stop offset="100%" style="stop-color: #32c5ff;"></stop>
                </linearGradient>
                </defs>
                <path d="M366,316.5Q327,383,243,395Q159,407,91.5,328.5Q24,250,99,184Q174,118,253.5,111.5Q333,105,369,177.5Q405,250,366,316.5Z" fill="url(#gradient)">
                    <animate  attributeName="d"
                        dur="10000ms"
                        repeatCount="indefinite"
                        values="M403.5,323Q334,396,240,413.5Q146,431,94,340.5Q42,250,84.5,143.5Q127,37,229.5,72Q332,107,402.5,178.5Q473,250,403.5,323Z;
                        M366,316.5Q327,383,243,395Q159,407,91.5,328.5Q24,250,99,184Q174,118,253.5,111.5Q333,105,369,177.5Q405,250,366,316.5Z;
                        M403.5,323Q334,396,240,413.5Q146,431,94,340.5Q42,250,84.5,143.5Q127,37,229.5,72Q332,107,402.5,178.5Q473,250,403.5,323Z;
                        "
                    ></animate >
                </path>
            </g>
        </svg>
    </div>
</template>