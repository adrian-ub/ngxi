import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsBeanieIcon],svg[meteocons-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ef4444" stroke-miterlimit="10" stroke-width="9" d="M173 304.7v-17a83 83 0 0 1 83-83a83 83 0 0 1 83 83v17"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9" d="M160 317.5v34.4c0 6.3 7.1 11.4 16 11.4h160c8.9 0 16-5.1 16-11.4v-34.4c0-6.3-7.1-11.4-16-11.4H176c-8.9 0-16 5-16 11.4Z"></svg:path><svg:circle cx="256" cy="170.7" r="22" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9"><svg:animatetransform id="meteoconsBeanie0" fill="freeze" additive="sum" attributeName="transform" begin="0s; x.end+2.58s" calcMode="spline" dur=".42s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .4; .8; 1" type="translate" values="0 0; 0 -9; 0 3; 0 0"></svg:animatetransform><svg:animatetransform id="meteoconsBeanie1" fill="freeze" additive="sum" attributeName="transform" begin="1s; y.end+2.25s" calcMode="spline" dur=".75s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .22; .44; .67; .89; 1" type="rotate" values="0 256 256; -15 256 256; 9 256 256; -9 256 256; 6 256 256; 0 256 256"></svg:animatetransform></svg:circle>`,
})
export class MeteoconsBeanieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsBarometerIcon],svg[meteocons-barometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="144" fill="none" stroke="#475569" stroke-miterlimit="10" stroke-width="12"></svg:circle><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M256 200v-48m108 104h-48m-116 0h-48m180-68l-24 24m-104 0l-24-24m128 112l24 24m-152 0l24-24"></svg:path><svg:circle cx="256" cy="256" r="24" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M256 284V164"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .17; .25; .42; .5; .67; 1" repeatCount="indefinite" type="rotate" values="-54 256 256; -15 256 256; -36 256 256; 36 256 256; 10 256 256; 115 256 256; -54 256 256"></svg:animatetransform></svg:path>`,
})
export class MeteoconsBarometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCelsiusIcon],svg[meteocons-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCelsius0" viewBox="0 0 109.1 73.2"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0m6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16q0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6a12.6 12.6 0 0 1 8.6 3a13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1q8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12"></svg:path></svg:symbol></svg:defs><svg:use width="109.1" height="73.2" href="#meteoconsCelsius0" transform="matrix(1.46 0 0 1.47 176.26 202.35)"></svg:use>`,
})
export class MeteoconsCelsiusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsClearDayIcon],svg[meteocons-clear-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsClearDay0" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="375" height="375" href="#meteoconsClearDay0" transform="translate(68.5 68.5)"></svg:use>`,
})
export class MeteoconsClearDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsClearNightIcon],svg[meteocons-clear-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsClearNight0" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="279" height="279" href="#meteoconsClearNight0" transform="translate(116.5 116.5)"></svg:use>`,
})
export class MeteoconsClearNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudDownIcon],svg[meteocons-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCloudDown0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsCloudDown0" transform="translate(76.5 140.5)"></svg:use><svg:path fill="#374151" d="M372.5 271a4.6 4.6 0 0 0-3.2 1.3L350 290.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 244a4.6 4.6 0 0 0-3.2 1.3L350 263.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 217a4.6 4.6 0 0 0-3.2 1.3L350 236.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsCloudDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudUpIcon],svg[meteocons-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCloudUp0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsCloudUp0" transform="translate(76.5 140.5)"></svg:use><svg:path fill="#374151" d="M372.5 247a4.6 4.6 0 0 1-3.2-1.3L350 227.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 274a4.6 4.6 0 0 1-3.2-1.3L350 254.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 301a4.6 4.6 0 0 1-3.2-1.3L350 281.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsCloudUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudyIcon],svg[meteocons-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCloudy0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsCloudy0" transform="translate(76.5 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use>`,
})
export class MeteoconsCloudyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCodeRedIcon],svg[meteocons-code-red-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ef4444" stroke-miterlimit="10" stroke-width="15" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9Z"></svg:path><svg:path fill="#ef4444" d="M243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6m29 107.6q0 7-3 9.5c-2 1.8-5.6 2.7-11 2.7h-4c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"></svg:path>`,
})
export class MeteoconsCodeRedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCodeYellowIcon],svg[meteocons-code-yellow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ffd43b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9Z"></svg:path><svg:path fill="#ffd43b" d="M243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6m29 107.6q0 7-3 9.5c-2 1.8-5.6 2.7-11 2.7h-4c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"></svg:path>`,
})
export class MeteoconsCodeYellowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCompassIcon],svg[meteocons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="144" fill="none" stroke="#475569" stroke-miterlimit="10" stroke-width="12"></svg:circle><svg:path fill="#475569" d="M259.2 152v-10.4h4.6v18h-4.7l-6.3-10.4v10.4h-4.6v-18h4.7Zm103.3 105.7v3.3h9.8v4h-14.5v-18H372v4h-9.5v3h8.3v3.8Zm-106.4 116a8.4 8.4 0 0 1-5.4-1.6a5.8 5.8 0 0 1-2-4.4h4.4c0 1.6 1.1 2.4 3.1 2.4c1.8 0 2.6-.6 2.6-1.7a1.3 1.3 0 0 0-.4-1a4.6 4.6 0 0 0-1.6-.7l-3.4-.7c-2.9-.7-4.4-2.4-4.4-4.9a5 5 0 0 1 1.7-3.9a7.5 7.5 0 0 1 5.1-1.5a8 8 0 0 1 5 1.5a5.2 5.2 0 0 1 2 4h-4.3c-.2-1.4-1-2-2.7-2a2.9 2.9 0 0 0-1.6.4a1.3 1.3 0 0 0-.6 1c0 .8.5 1.3 1.6 1.6l3.5.8q4.7 1.1 4.7 5.1a4.9 4.9 0 0 1-2 4.1a8.5 8.5 0 0 1-5.3 1.5ZM156.2 255l2-8h4.7l-5.2 18h-4.5l-2.5-11.5l-2.3 11.5h-4.6l-5.2-18h4.7l2 8l.9 4.2l.7-4.3l1.7-7.9h4.4l1.8 8l.6 4.1Z"></svg:path><svg:g><svg:path fill="#ef4444" d="m256 172l-24 84h48l-24-84z"></svg:path><svg:path fill="#e2e8f0" d="m232 256l24 84l24-84h-48z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="2s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"></svg:animatetransform></svg:g>`,
})
export class MeteoconsCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsDrizzleIcon],svg[meteocons-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsDrizzle0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsDrizzle0" transform="translate(76.5 140.5)"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle1" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle2" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle3" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle4" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle5" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle6" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsDustIcon],svg[meteocons-dust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsDust0" x1="6" x2="18" y1="169.6" y2="190.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fde68a"></svg:stop><svg:stop offset=".5" stop-color="#fde68a"></svg:stop><svg:stop offset="1" stop-color="#fde171"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsDust1" x1="66" x2="78" y1="169.6" y2="190.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust2" x1="38" x2="50" y1="137.6" y2="158.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust3" x1="98" x2="110" y1="137.6" y2="158.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust4" x1="70" x2="82" y1="101.6" y2="122.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust5" x1="130" x2="142" y1="101.6" y2="122.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust6" x1="102" x2="114" y1="69.6" y2="90.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust7" x1="162" x2="174" y1="69.6" y2="90.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust8" x1="134" x2="146" y1="33.6" y2="54.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDust9" x1="194" x2="206" y1="33.6" y2="54.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDusta" x1="166" x2="178" y1="1.6" y2="22.4" href="#meteoconsDust0"></svg:lineargradient><svg:lineargradient id="meteoconsDustb" x1="226" x2="238" y1="1.6" y2="22.4" href="#meteoconsDust0"></svg:lineargradient><svg:symbol id="meteoconsDustc" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsDustd" viewBox="0 0 244 192"><svg:circle cx="12" cy="180" r="12" fill="url(#meteoconsDust0)"><svg:animate attributeName="opacity" begin="-1s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="72" cy="180" r="12" fill="url(#meteoconsDust1)"><svg:animate attributeName="opacity" begin="-1.08s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="44" cy="148" r="12" fill="url(#meteoconsDust2)"><svg:animate attributeName="opacity" begin="-1.16s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="104" cy="148" r="12" fill="url(#meteoconsDust3)"><svg:animate attributeName="opacity" begin="-1.24s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="76" cy="112" r="12" fill="url(#meteoconsDust4)"><svg:animate attributeName="opacity" begin="-1.32s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="136" cy="112" r="12" fill="url(#meteoconsDust5)"><svg:animate attributeName="opacity" begin="-1.40s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="108" cy="80" r="12" fill="url(#meteoconsDust6)"><svg:animate attributeName="opacity" begin="-1.48s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="168" cy="80" r="12" fill="url(#meteoconsDust7)"><svg:animate attributeName="opacity" begin="-1.56s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="140" cy="44" r="12" fill="url(#meteoconsDust8)"><svg:animate attributeName="opacity" begin="-1.64s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="200" cy="44" r="12" fill="url(#meteoconsDust9)"><svg:animate attributeName="opacity" begin="-1.72s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="172" cy="12" r="12" fill="url(#meteoconsDusta)"><svg:animate attributeName="opacity" begin="-1.80s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="232" cy="12" r="12" fill="url(#meteoconsDustb)"><svg:animate attributeName="opacity" begin="-1.88s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsDuste"><svg:path fill="none" d="M0 0h512L0 512V0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsDuste)"><svg:use width="359" height="231" href="#meteoconsDustc" transform="translate(80.5 140.5)"></svg:use></svg:g><svg:use width="244" height="192" href="#meteoconsDustd" transform="translate(192 182)"></svg:use>`,
})
export class MeteoconsDustIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsDustDayIcon],svg[meteocons-dust-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsDustDay0" x1="6" x2="18" y1="169.6" y2="190.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fde68a"></svg:stop><svg:stop offset=".5" stop-color="#fde68a"></svg:stop><svg:stop offset="1" stop-color="#fde171"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsDustDay1" x1="66" x2="78" y1="169.6" y2="190.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay2" x1="38" x2="50" y1="137.6" y2="158.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay3" x1="98" x2="110" y1="137.6" y2="158.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay4" x1="70" x2="82" y1="101.6" y2="122.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay5" x1="130" x2="142" y1="101.6" y2="122.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay6" x1="102" x2="114" y1="69.6" y2="90.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay7" x1="162" x2="174" y1="69.6" y2="90.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay8" x1="134" x2="146" y1="33.6" y2="54.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDay9" x1="194" x2="206" y1="33.6" y2="54.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDaya" x1="166" x2="178" y1="1.6" y2="22.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:lineargradient id="meteoconsDustDayb" x1="226" x2="238" y1="1.6" y2="22.4" href="#meteoconsDustDay0"></svg:lineargradient><svg:symbol id="meteoconsDustDayc" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsDustDayd" viewBox="0 0 244 192"><svg:circle cx="12" cy="180" r="12" fill="url(#meteoconsDustDay0)"><svg:animate attributeName="opacity" begin="-1s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="72" cy="180" r="12" fill="url(#meteoconsDustDay1)"><svg:animate attributeName="opacity" begin="-1.08s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="44" cy="148" r="12" fill="url(#meteoconsDustDay2)"><svg:animate attributeName="opacity" begin="-1.16s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="104" cy="148" r="12" fill="url(#meteoconsDustDay3)"><svg:animate attributeName="opacity" begin="-1.24s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="76" cy="112" r="12" fill="url(#meteoconsDustDay4)"><svg:animate attributeName="opacity" begin="-1.32s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="136" cy="112" r="12" fill="url(#meteoconsDustDay5)"><svg:animate attributeName="opacity" begin="-1.40s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="108" cy="80" r="12" fill="url(#meteoconsDustDay6)"><svg:animate attributeName="opacity" begin="-1.48s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="168" cy="80" r="12" fill="url(#meteoconsDustDay7)"><svg:animate attributeName="opacity" begin="-1.56s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="140" cy="44" r="12" fill="url(#meteoconsDustDay8)"><svg:animate attributeName="opacity" begin="-1.64s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="200" cy="44" r="12" fill="url(#meteoconsDustDay9)"><svg:animate attributeName="opacity" begin="-1.72s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="172" cy="12" r="12" fill="url(#meteoconsDustDaya)"><svg:animate attributeName="opacity" begin="-1.80s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="232" cy="12" r="12" fill="url(#meteoconsDustDayb)"><svg:animate attributeName="opacity" begin="-1.88s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsDustDaye"><svg:path fill="none" d="M0 0h512L0 512V0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsDustDaye)"><svg:use width="375" height="375" href="#meteoconsDustDayc" transform="translate(68.5 68.5)"></svg:use></svg:g><svg:use width="244" height="192" href="#meteoconsDustDayd" transform="translate(192 182)"></svg:use>`,
})
export class MeteoconsDustDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsDustNightIcon],svg[meteocons-dust-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsDustNight0" x1="6" x2="18" y1="169.6" y2="190.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fde68a"></svg:stop><svg:stop offset=".5" stop-color="#fde68a"></svg:stop><svg:stop offset="1" stop-color="#fde171"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsDustNight1" x1="66" x2="78" y1="169.6" y2="190.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight2" x1="38" x2="50" y1="137.6" y2="158.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight3" x1="98" x2="110" y1="137.6" y2="158.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight4" x1="70" x2="82" y1="101.6" y2="122.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight5" x1="130" x2="142" y1="101.6" y2="122.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight6" x1="102" x2="114" y1="69.6" y2="90.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight7" x1="162" x2="174" y1="69.6" y2="90.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight8" x1="134" x2="146" y1="33.6" y2="54.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNight9" x1="194" x2="206" y1="33.6" y2="54.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNighta" x1="166" x2="178" y1="1.6" y2="22.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:lineargradient id="meteoconsDustNightb" x1="226" x2="238" y1="1.6" y2="22.4" href="#meteoconsDustNight0"></svg:lineargradient><svg:symbol id="meteoconsDustNightc" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsDustNightd" viewBox="0 0 244 192"><svg:circle cx="12" cy="180" r="12" fill="url(#meteoconsDustNight0)"><svg:animate attributeName="opacity" begin="-1s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="72" cy="180" r="12" fill="url(#meteoconsDustNight1)"><svg:animate attributeName="opacity" begin="-1.08s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="44" cy="148" r="12" fill="url(#meteoconsDustNight2)"><svg:animate attributeName="opacity" begin="-1.16s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="104" cy="148" r="12" fill="url(#meteoconsDustNight3)"><svg:animate attributeName="opacity" begin="-1.24s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="76" cy="112" r="12" fill="url(#meteoconsDustNight4)"><svg:animate attributeName="opacity" begin="-1.32s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="136" cy="112" r="12" fill="url(#meteoconsDustNight5)"><svg:animate attributeName="opacity" begin="-1.40s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="108" cy="80" r="12" fill="url(#meteoconsDustNight6)"><svg:animate attributeName="opacity" begin="-1.48s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="168" cy="80" r="12" fill="url(#meteoconsDustNight7)"><svg:animate attributeName="opacity" begin="-1.56s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="140" cy="44" r="12" fill="url(#meteoconsDustNight8)"><svg:animate attributeName="opacity" begin="-1.64s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="200" cy="44" r="12" fill="url(#meteoconsDustNight9)"><svg:animate attributeName="opacity" begin="-1.72s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="172" cy="12" r="12" fill="url(#meteoconsDustNighta)"><svg:animate attributeName="opacity" begin="-1.80s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle><svg:circle cx="232" cy="12" r="12" fill="url(#meteoconsDustNightb)"><svg:animate attributeName="opacity" begin="-1.88s" dur=".67s" repeatCount="indefinite" values=".5; 1; .5"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsDustNighte"><svg:path fill="none" d="M0 0h512L0 512V0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsDustNighte)"><svg:use width="279" height="279" href="#meteoconsDustNightc" transform="translate(116.5 116.5)"></svg:use></svg:g><svg:use width="244" height="192" href="#meteoconsDustNightd" transform="translate(192 182)"></svg:use>`,
})
export class MeteoconsDustNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsDustWindIcon],svg[meteocons-dust-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsDustWind0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g opacity="0"><svg:circle cx="96" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="222" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="172" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind1" additive="sum" attributeName="transform" begin="1s; x1.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind2" attributeName="opacity" begin="1s; y1.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:g opacity="0"><svg:circle cx="180" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="306" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="256" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind3" additive="sum" attributeName="transform" begin=".5s; x2.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind4" attributeName="opacity" begin=".5s; y2.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:g opacity="0"><svg:circle cx="264" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="390" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="340" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind5" additive="sum" attributeName="transform" begin="0s; x3.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind6" attributeName="opacity" begin="0s; y3.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:use width="342" height="234" href="#meteoconsDustWind0" transform="translate(86 139)"></svg:use>`,
})
export class MeteoconsDustWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeIcon],svg[meteocons-extreme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtreme0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtreme1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtreme2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtreme3)"><svg:use width="214.3" height="140.1" href="#meteoconsExtreme0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtreme1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:clippath id="meteoconsExtreme3"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtreme2" transform="translate(64.34)"></svg:use>`,
})
export class MeteoconsExtremeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayIcon],svg[meteocons-extreme-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDay0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDay1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDay2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDay3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDay5)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDay1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDay2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDay4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDay6)"><svg:use width="193" height="193" href="#meteoconsExtremeDay0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDay3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsExtremeDay5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDay6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDay4"></svg:use>`,
})
export class MeteoconsExtremeDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayDrizzleIcon],svg[meteocons-extreme-day-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDayDrizzle0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayDrizzle1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayDrizzle2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayDrizzle3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDayDrizzle5)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDayDrizzle1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDayDrizzle2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayDrizzle4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDayDrizzle6)"><svg:use width="193" height="193" href="#meteoconsExtremeDayDrizzle0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDayDrizzle3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsExtremeDayDrizzle5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDayDrizzle6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDayDrizzle4"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayDrizzle7" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDayDrizzle8" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayDrizzle9" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDayDrizzlea" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayDrizzleb" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDayDrizzlec" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsExtremeDayDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayFogIcon],svg[meteocons-extreme-day-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDayFog0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayFog1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayFog2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayFog3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDayFog6)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDayFog1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDayFog2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayFog4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDayFog7)"><svg:use width="193" height="193" href="#meteoconsExtremeDayFog0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDayFog3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayFog5" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeDayFog6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDayFog7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDayFog4"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeDayFog5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeDayFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayHailIcon],svg[meteocons-extreme-day-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDayHail0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHail1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHail2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHail3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDayHailc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDayHail1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDayHail2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayHail4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDayHaild)"><svg:use width="193" height="193" href="#meteoconsExtremeDayHail0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDayHail3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayHail5" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayHail6" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeDayHail7" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayHail8" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsExtremeDayHail9" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayHaila" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeDayHailb" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeDayHailc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDayHaild"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDayHail4"></svg:use><svg:use width="136" height="24" href="#meteoconsExtremeDayHail5" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsExtremeDayHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayHazeIcon],svg[meteocons-extreme-day-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDayHaze0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHaze1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHaze2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayHaze3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDayHaze6)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDayHaze1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDayHaze2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayHaze4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDayHaze7)"><svg:use width="193" height="193" href="#meteoconsExtremeDayHaze0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDayHaze3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayHaze5" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeDayHaze6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDayHaze7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDayHaze4"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeDayHaze5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeDayHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDayRainIcon],svg[meteocons-extreme-day-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDayRain0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayRain1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayRain2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDayRain3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDayRainc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDayRain1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDayRain2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayRain4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDayRaind)"><svg:use width="193" height="193" href="#meteoconsExtremeDayRain0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDayRain3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDayRain5" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayRain6" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeDayRain7" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayRain8" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeDayRain9" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDayRaina" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeDayRainb" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeDayRainc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDayRaind"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDayRain4"></svg:use><svg:use width="128" height="56" href="#meteoconsExtremeDayRain5" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsExtremeDayRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDaySleetIcon],svg[meteocons-extreme-day-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDaySleet0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySleet1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySleet2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySleet3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySleetj)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDaySleet1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDaySleet2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySleet4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySleetk)"><svg:use width="193" height="193" href="#meteoconsExtremeDaySleet0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDaySleet3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySleet5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleet6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySleet7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleet8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySleet9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleeta" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySleetb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsExtremeDaySleetc" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsExtremeDaySleet5"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySleetd" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleete" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySleetf" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleetg" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySleeth" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySleeti" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeDaySleetj"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDaySleetk"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDaySleet4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeDaySleetc" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeDaySleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDaySmokeIcon],svg[meteocons-extreme-day-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDaySmoke0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySmoke1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySmoke2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySmoke3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySmokef)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDaySmoke1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDaySmoke2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySmoke4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySmokeg)"><svg:use width="193" height="193" href="#meteoconsExtremeDaySmoke0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDaySmoke3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySmoke5" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySmoke6" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySmoke7" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeDaySmoke8" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySmoke9" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySmokea" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeDaySmokeb" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeDaySmokec" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySmoked" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeDaySmokee" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsExtremeDaySmokef"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDaySmokeg"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDaySmoke4"></svg:use><svg:use width="173" height="217" href="#meteoconsExtremeDaySmoke5" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsExtremeDaySmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDaySnowIcon],svg[meteocons-extreme-day-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDaySnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDaySnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDaySnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDaySnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeDaySnowd)"><svg:use width="193" height="193" href="#meteoconsExtremeDaySnow0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDaySnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeDaySnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeDaySnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeDaySnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeDaySnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeDaySnowd"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeDaySnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeDaySnow5" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeDaySnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeDrizzleIcon],svg[meteocons-extreme-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeDrizzle0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDrizzle1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeDrizzle2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeDrizzle3)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeDrizzle0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeDrizzle1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:clippath id="meteoconsExtremeDrizzle3"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeDrizzle2" transform="translate(64.34)"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDrizzle4" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDrizzle5" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDrizzle6" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDrizzle7" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeDrizzle8" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeDrizzle9" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsExtremeDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeFogIcon],svg[meteocons-extreme-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeFog0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeFog1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeFog2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeFog4)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeFog0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeFog1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeFog3" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeFog4"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeFog2" transform="translate(64.34)"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeFog3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeHailIcon],svg[meteocons-extreme-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeHail0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeHail1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeHail2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeHaila)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeHail0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeHail1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeHail3" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeHail4" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeHail5" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeHail6" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsExtremeHail7" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsExtremeHail8" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeHail9" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeHaila"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeHail2" transform="translate(64.34)"></svg:use><svg:use width="136" height="24" href="#meteoconsExtremeHail3" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsExtremeHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeHazeIcon],svg[meteocons-extreme-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeHaze0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeHaze1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeHaze2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeHaze4)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeHaze0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeHaze1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeHaze3" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeHaze4"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeHaze2" transform="translate(64.34)"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeHaze3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightIcon],svg[meteocons-extreme-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNight0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNight1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNight2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNight3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNight5)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNight1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNight2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNight4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNight6)"><svg:use width="178" height="178" href="#meteoconsExtremeNight0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNight3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsExtremeNight5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNight6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNight4"></svg:use>`,
})
export class MeteoconsExtremeNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightDrizzleIcon],svg[meteocons-extreme-night-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightDrizzle0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightDrizzle1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightDrizzle2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightDrizzle3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightDrizzle5)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightDrizzle1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightDrizzle2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightDrizzle4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightDrizzle6)"><svg:use width="178" height="178" href="#meteoconsExtremeNightDrizzle0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightDrizzle3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsExtremeNightDrizzle5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightDrizzle6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightDrizzle4"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightDrizzle7" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightDrizzle8" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightDrizzle9" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightDrizzlea" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightDrizzleb" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightDrizzlec" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsExtremeNightDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightFogIcon],svg[meteocons-extreme-night-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightFog0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightFog1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightFog2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightFog3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightFog6)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightFog1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightFog2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightFog4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightFog7)"><svg:use width="178" height="178" href="#meteoconsExtremeNightFog0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightFog3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightFog5" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeNightFog6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightFog7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightFog4"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeNightFog5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeNightFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightHailIcon],svg[meteocons-extreme-night-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightHail0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHail1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHail2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHail3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightHailc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightHail1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightHail2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightHail4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightHaild)"><svg:use width="178" height="178" href="#meteoconsExtremeNightHail0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightHail3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightHail5" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightHail6" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeNightHail7" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightHail8" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsExtremeNightHail9" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightHaila" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsExtremeNightHailb" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeNightHailc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightHaild"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightHail4"></svg:use><svg:use width="136" height="24" href="#meteoconsExtremeNightHail5" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsExtremeNightHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightHazeIcon],svg[meteocons-extreme-night-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightHaze0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHaze1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHaze2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightHaze3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightHaze6)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightHaze1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightHaze2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightHaze4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightHaze7)"><svg:use width="178" height="178" href="#meteoconsExtremeNightHaze0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightHaze3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightHaze5" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeNightHaze6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightHaze7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightHaze4"></svg:use><svg:use width="258" height="66" href="#meteoconsExtremeNightHaze5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsExtremeNightHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightRainIcon],svg[meteocons-extreme-night-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightRain0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightRain1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightRain2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightRain3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightRainc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightRain1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightRain2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightRain4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightRaind)"><svg:use width="178" height="178" href="#meteoconsExtremeNightRain0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightRain3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightRain5" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightRain6" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeNightRain7" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightRain8" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeNightRain9" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightRaina" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeNightRainb" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeNightRainc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightRaind"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightRain4"></svg:use><svg:use width="128" height="56" href="#meteoconsExtremeNightRain5" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsExtremeNightRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightSleetIcon],svg[meteocons-extreme-night-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightSleet0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSleet1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSleet2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSleet3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSleetj)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightSleet1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightSleet2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSleet4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSleetk)"><svg:use width="178" height="178" href="#meteoconsExtremeNightSleet0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightSleet3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSleet5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleet6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSleet7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleet8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSleet9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleeta" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSleetb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsExtremeNightSleetc" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsExtremeNightSleet5"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSleetd" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleete" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSleetf" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleetg" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSleeth" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSleeti" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeNightSleetj"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightSleetk"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightSleet4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeNightSleetc" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeNightSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightSmokeIcon],svg[meteocons-extreme-night-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightSmoke0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSmoke1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSmoke2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSmoke3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSmokef)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightSmoke1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightSmoke2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSmoke4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSmokeg)"><svg:use width="178" height="178" href="#meteoconsExtremeNightSmoke0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightSmoke3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSmoke5" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSmoke6" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSmoke7" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeNightSmoke8" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSmoke9" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSmokea" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeNightSmokeb" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeNightSmokec" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSmoked" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeNightSmokee" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsExtremeNightSmokef"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightSmokeg"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightSmoke4"></svg:use><svg:use width="173" height="217" href="#meteoconsExtremeNightSmoke5" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsExtremeNightSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeNightSnowIcon],svg[meteocons-extreme-night-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeNightSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeNightSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeNightSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeNightSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsExtremeNightSnowd)"><svg:use width="178" height="178" href="#meteoconsExtremeNightSnow0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsExtremeNightSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeNightSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeNightSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeNightSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeNightSnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsExtremeNightSnowd"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsExtremeNightSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeNightSnow5" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeNightSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeRainIcon],svg[meteocons-extreme-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeRain0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeRain1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeRain2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeRaina)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeRain0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeRain1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeRain3" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeRain4" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeRain5" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeRain6" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeRain7" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeRain8" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsExtremeRain9" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeRaina"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeRain2" transform="translate(64.34)"></svg:use><svg:use width="128" height="56" href="#meteoconsExtremeRain3" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsExtremeRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeSleetIcon],svg[meteocons-extreme-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeSleet0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSleet1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSleet2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeSleeth)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeSleet0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeSleet1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeSleet3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSleet4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSleet5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSleet6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSleet7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSleet8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSleet9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsExtremeSleeta" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsExtremeSleet3"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeSleetb" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeSleetc" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeSleetd" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeSleete" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsExtremeSleetf" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsExtremeSleetg" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsExtremeSleeth"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeSleet2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeSleeta" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeSmokeIcon],svg[meteocons-extreme-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeSmoke0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSmoke1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSmoke2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeSmoked)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeSmoke0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeSmoke1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeSmoke3" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeSmoke4" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeSmoke5" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeSmoke6" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeSmoke7" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeSmoke8" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeSmoke9" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsExtremeSmokea" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsExtremeSmokeb" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsExtremeSmokec" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsExtremeSmoked"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeSmoke2" transform="translate(64.34)"></svg:use><svg:use width="173" height="217" href="#meteoconsExtremeSmoke3" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsExtremeSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsExtremeSnowIcon],svg[meteocons-extreme-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsExtremeSnow0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsExtremeSnow2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsExtremeSnowa)"><svg:use width="214.3" height="140.1" href="#meteoconsExtremeSnow0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsExtremeSnow1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsExtremeSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsExtremeSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsExtremeSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsExtremeSnowa"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsExtremeSnow2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsExtremeSnow3" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsExtremeSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFahrenheitIcon],svg[meteocons-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsFahrenheit0" viewBox="0 0 99.5 70.9"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0m6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm73.8-7.8V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9z"></svg:path></svg:symbol></svg:defs><svg:use width="99.5" height="70.9" href="#meteoconsFahrenheit0" transform="matrix(1.5 0 0 1.51 181.49 202.35)"></svg:use>`,
})
export class MeteoconsFahrenheitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFallingStarsIcon],svg[meteocons-falling-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsFallingStars0"><svg:path fill="none" d="M512 27.5L240 189.1l16 48l40 32l216-96V27.5z"></svg:path></svg:clippath><svg:symbol id="meteoconsFallingStars1" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsFallingStars0)" opacity="0"><svg:path fill="none" stroke="#fcd34d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="m370 174.1l-5.4 2.7"></svg:path><svg:path fill="none" stroke="#fcd34d" stroke-dasharray="12.6 12.6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M353.4 182.4L269 224.6"></svg:path><svg:path fill="none" stroke="#fcd34d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="m263.4 227.4l-5.4 2.7"></svg:path><svg:path fill="#fcd34d" d="m367.1 146.3l18 18.3a1.8 1.8 0 0 1 .5 1.8l-6.5 24.9a1.8 1.8 0 0 0 3 1.7l18.4-18a1.8 1.8 0 0 1 1.7-.4l25 6.4a1.8 1.8 0 0 0 1.7-3l-18-18.4a1.8 1.8 0 0 1-.5-1.7l6.4-24.9a1.8 1.8 0 0 0-3-1.7l-18.3 18a1.8 1.8 0 0 1-1.7.4l-25-6.4a1.8 1.8 0 0 0-1.7 3Z"></svg:path><svg:animatetransform id="meteoconsFallingStars2" additive="sum" attributeName="transform" begin="0s; x1.end+2s" dur="1s" repeatCount="indefinite" type="translate" values="-126 48; 42 -30"></svg:animatetransform><svg:animate id="meteoconsFallingStars3" attributeName="opacity" begin="0s; y1.end+2s" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .17; .67; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:path fill="#fcd34d" d="m282.8 162.8l25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 312 144; 15 312 144; -15 312 144"></svg:animatetransform><svg:animate attributeName="opacity" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:path fill="#fcd34d" d="m337.3 223.7l24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"><svg:animatetransform additive="sum" attributeName="transform" begin="-.67s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 372 222; 15 372 222; -15 372 222"></svg:animatetransform><svg:animate attributeName="opacity" begin="-.67s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:use width="279" height="279" href="#meteoconsFallingStars1" transform="translate(116.5 116.5)"></svg:use>`,
})
export class MeteoconsFallingStarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagGaleWarningIcon],svg[meteocons-flag-gale-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagGaleWarning0" x1="90" x2="206" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsFlagGaleWarning0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:g><svg:path fill="#ef4444" d="M191.4 137a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Zm0 110a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagGaleWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagHurricaneWarningIcon],svg[meteocons-flag-hurricane-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagHurricaneWarning0" x1="116.5" x2="232.5" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:g><svg:path fill="none" stroke="url(#meteoconsFlagHurricaneWarning0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M174.5 376V136"></svg:path><svg:rect width="52.9" height="40" x="247.5" y="165" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:rect width="127" height="96" x="210.5" y="137" fill="#ef4444" rx="6.1"></svg:rect><svg:rect width="52.9" height="40" x="247.5" y="165" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:rect width="127" height="96" x="210.5" y="246" fill="#ef4444" rx="6.1"></svg:rect><svg:rect width="52.9" height="40" x="247.5" y="274" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagHurricaneWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagSmallCraftAdvisoryIcon],svg[meteocons-flag-small-craft-advisory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagSmallCraftAdvisory0" x1="90" x2="206" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsFlagSmallCraftAdvisory0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:g><svg:path fill="#ef4444" d="M191.4 137a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagSmallCraftAdvisoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagStormWarningIcon],svg[meteocons-flag-storm-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagStormWarning0" x1="116.5" x2="232.5" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsFlagStormWarning0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M174.5 376V136"></svg:path><svg:g><svg:rect width="127" height="96" x="210.5" y="137" fill="#ef4444" rx="6.1"></svg:rect><svg:rect width="52.9" height="40" x="247.5" y="165" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagStormWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogIcon],svg[meteocons-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsFog0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsFog1" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsFog0" transform="translate(76.5 140.5)"></svg:use><svg:use width="258" height="66" href="#meteoconsFog1" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogDayIcon],svg[meteocons-fog-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsFogDay0" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsFogDay1" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsFogDay2"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsFogDay2)"><svg:use width="375" height="375" href="#meteoconsFogDay0" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:use width="258" height="66" href="#meteoconsFogDay1" transform="translate(127 339)"></svg:use>`,
})
export class MeteoconsFogDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogNightIcon],svg[meteocons-fog-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsFogNight0" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsFogNight1" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsFogNight2"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsFogNight2)"><svg:use width="279" height="279" href="#meteoconsFogNight0" transform="translate(116.5 116.5)"></svg:use></svg:g><svg:use width="258" height="66" href="#meteoconsFogNight1" transform="translate(127 339)"></svg:use>`,
})
export class MeteoconsFogNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsGloveIcon],svg[meteocons-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g><svg:path fill="none" stroke="#ef4444" stroke-miterlimit="10" stroke-width="9" d="M320.3 302v-88a64.1 64.1 0 0 0-64.2-64a64.1 64.1 0 0 0-64.3 64v39.3l-19.4-11.2a16.1 16.1 0 0 0-22 5.9a16 16 0 0 0 6 21.9l34.7 20c.3 0 .5.2.7.3V302"></svg:path><svg:rect width="144.5" height="60" x="183.8" y="302" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9" rx="12"></svg:rect><svg:animatetransform id="meteoconsGlove0" additive="sum" attributeName="transform" begin="0s; x1.end+1.75s" calcMode="spline" dur="1.25s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" type="rotate" values="0 256 332; 0 256 332; -15 256 332; 15 256 332; -9 256 332; 9 256 332; -6 256 332; 3 256 332; 0 256 332"></svg:animatetransform></svg:g>`,
})
export class MeteoconsGloveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHailIcon],svg[meteocons-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHail0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsHail1" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsHail2" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsHail3" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsHail4" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsHail5" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsHail6" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsHail7" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsHail0" transform="translate(76.5 140.5)"></svg:use><svg:use width="136" height="24" href="#meteoconsHail1" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHazeIcon],svg[meteocons-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHaze0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsHaze1" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsHaze0" transform="translate(76.5 140.5)"></svg:use><svg:use width="258" height="66" href="#meteoconsHaze1" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHazeDayIcon],svg[meteocons-haze-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHazeDay0" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsHazeDay1" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsHazeDay2"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsHazeDay2)"><svg:use width="375" height="375" href="#meteoconsHazeDay0" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:use width="258" height="66" href="#meteoconsHazeDay1" transform="translate(127 339)"></svg:use>`,
})
export class MeteoconsHazeDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHazeNightIcon],svg[meteocons-haze-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHazeNight0" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsHazeNight1" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsHazeNight2"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsHazeNight2)"><svg:use width="279" height="279" href="#meteoconsHazeNight0" transform="translate(116.5 116.5)"></svg:use></svg:g><svg:use width="258" height="66" href="#meteoconsHazeNight1" transform="translate(127 339)"></svg:use>`,
})
export class MeteoconsHazeNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHorizonIcon],svg[meteocons-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsHorizon0"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath><svg:symbol id="meteoconsHorizon1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsHorizon0)"><svg:use width="375" height="375" href="#meteoconsHorizon1" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h256"></svg:path>`,
})
export class MeteoconsHorizonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHumidityIcon],svg[meteocons-humidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHumidity0" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="175" height="260.9" href="#meteoconsHumidity0" transform="translate(168.4 123.18)"></svg:use><svg:path fill="#374151" d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 0 1-.6 2.6l-53 73.3a9.4 9.4 0 0 1-2.8 2.8a12.3 12.3 0 0 1-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 0 1 .7-2.8l53-73.3a7 7 0 0 1 2.6-2.7a12.7 12.7 0 0 1 4.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"></svg:path>`,
})
export class MeteoconsHumidityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsHurricaneIcon],svg[meteocons-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M344 256a88 88 0 1 1-88-88a88 88 0 0 1 88 88ZM200 116.9l-3.8 7.7A269.7 269.7 0 0 0 169 267h0m143.1 128l3.8-7.7A269.7 269.7 0 0 0 343.2 245h0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="1440 256 256; 0 256 256"></svg:animatetransform></svg:path>`,
})
export class MeteoconsHurricaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsLightningBoltIcon],svg[meteocons-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsLightningBolt0" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsLightningBolt1" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="96" height="176" href="#meteoconsLightningBolt0" transform="translate(190.13 132.72)scale(1.36)"></svg:use>`,
})
export class MeteoconsLightningBoltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMistIcon],svg[meteocons-mist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 200h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 256h240"><svg:animatetransform additive="sum" attributeName="transform" begin="-1.5s" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 312h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="48 0; -48 0; 48 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsMistIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonFirstQuarterIcon],svg[meteocons-moon-first-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.6" d="M306.4 138a127.2 127.2 0 0 0-51.6-11.5a127 127 0 0 1 23.6 138.1A127.1 127.1 0 0 1 160 339.3c12.7 15.7 23.3 22 43 30.8c65.5 29 141.6.7 170.2-63.4s-1.4-139.6-66.8-168.7"></svg:path>`,
})
export class MeteoconsMoonFirstQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonFullIcon],svg[meteocons-moon-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="140" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"></svg:circle>`,
})
export class MeteoconsMoonFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonLastQuarterIcon],svg[meteocons-moon-last-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.7" d="M204.8 137.3a128.1 128.1 0 0 1 52-11.5a127.6 127.6 0 0 0-23.9 138.8A127.8 127.8 0 0 0 352 339.8c-12.8 15.7-23.4 22-43.3 30.9c-65.8 29.2-142.3.7-171-63.7s1.4-140.4 67.1-169.7"></svg:path>`,
})
export class MeteoconsMoonLastQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonNewIcon],svg[meteocons-moon-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path>`,
})
export class MeteoconsMoonNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaningCrescentIcon],svg[meteocons-moon-waning-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.6" d="M201.3 139.4a128.4 128.4 0 0 1 17.3-6.2l-.6.4h0c-83.8 87.9-19.1 233.2 102.2 229.7l.8-.2a127.2 127.2 0 1 1-119.7-223.7"></svg:path>`,
})
export class MeteoconsMoonWaningCrescentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaningGibbousIcon],svg[meteocons-moon-waning-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.8" d="M130.9 218c17.8-63 80.2-100 143.4-87.7a124.8 124.8 0 0 0-12.7 29.5a131.5 131.5 0 0 0 88 160.1a128 128 0 0 0 13.6 3.4a124 124 0 0 1-144.3 55a131.6 131.6 0 0 1-88-160.3"></svg:path>`,
})
export class MeteoconsMoonWaningGibbousIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaxingCrescentIcon],svg[meteocons-moon-waxing-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.7" d="M308.2 139a129.4 129.4 0 0 0-17.4-6.4l.6.5h0c84.2 88.2 19.3 234.1-102.6 230.7l-.8-.2a129 129 0 0 0 16.3 8.7a127.7 127.7 0 1 0 103.9-233.4Z"></svg:path>`,
})
export class MeteoconsMoonWaxingCrescentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaxingGibbousIcon],svg[meteocons-moon-waxing-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.8" d="M381.8 218c-17.9-63-80.2-100-143.4-87.7a124.8 124.8 0 0 1 12.7 29.5a131.5 131.5 0 0 1-88 160.1a128 128 0 0 1-13.7 3.4a124 124 0 0 0 144.4 55c67.7-21 107-92.7 88-160.3"></svg:path>`,
})
export class MeteoconsMoonWaxingGibbousIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonriseIcon],svg[meteocons-moonrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsMoonrise0"><svg:path fill="none" d="M512 306H304l-35.9-31.4a18.4 18.4 0 0 0-24.2 0L208 306H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsMoonrise1" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40-36l40 36h88"></svg:path><svg:g clip-path="url(#meteoconsMoonrise0)"><svg:use width="279" height="279" href="#meteoconsMoonrise1" transform="translate(116.5 116.5)"></svg:use></svg:g>`,
})
export class MeteoconsMoonriseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonsetIcon],svg[meteocons-moonset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsMoonset0"><svg:path fill="none" d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsMoonset1" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40 36l40-36h88"></svg:path><svg:g clip-path="url(#meteoconsMoonset0)"><svg:use width="279" height="279" href="#meteoconsMoonset1" transform="translate(116.5 116.5)"></svg:use></svg:g>`,
})
export class MeteoconsMoonsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsNotAvailableIcon],svg[meteocons-not-available-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#374251" d="M174.6 264.7v-62.3h27.7v107.2H174l-37.2-62v62H109V202.3h27.9Zm68.8 44.9h-27.1l44.6-107.3H288Zm159.6 0h-29.7l-6-18.3h-36.2l-6 18.3h-29.5l39.1-107.3h29.7ZM342.7 256l-4.8 14.6h22.8l-4.9-14.6l-6.6-22.4Z"></svg:path>`,
})
export class MeteoconsNotAvailableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastIcon],svg[meteocons-overcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercast0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercast1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercast2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercast3)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercast0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercast1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:clippath id="meteoconsOvercast3"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercast2" transform="translate(64.34)"></svg:use>`,
})
export class MeteoconsOvercastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayIcon],svg[meteocons-overcast-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDay0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDay1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDay2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDay3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDay5)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDay1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDay2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDay4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDay6)"><svg:use width="193" height="193" href="#meteoconsOvercastDay0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDay3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsOvercastDay5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDay6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDay4"></svg:use>`,
})
export class MeteoconsOvercastDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayDrizzleIcon],svg[meteocons-overcast-day-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDayDrizzle0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayDrizzle1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayDrizzle2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayDrizzle3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDayDrizzle5)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDayDrizzle1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDayDrizzle2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayDrizzle4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDayDrizzle6)"><svg:use width="193" height="193" href="#meteoconsOvercastDayDrizzle0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDayDrizzle3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsOvercastDayDrizzle5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDayDrizzle6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDayDrizzle4"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayDrizzle7" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDayDrizzle8" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayDrizzle9" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDayDrizzlea" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayDrizzleb" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDayDrizzlec" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsOvercastDayDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayFogIcon],svg[meteocons-overcast-day-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDayFog0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayFog1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayFog2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayFog3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDayFog6)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDayFog1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDayFog2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayFog4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDayFog7)"><svg:use width="193" height="193" href="#meteoconsOvercastDayFog0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDayFog3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayFog5" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastDayFog6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDayFog7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDayFog4"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastDayFog5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastDayFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayHailIcon],svg[meteocons-overcast-day-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDayHail0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHail1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHail2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHail3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDayHailc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDayHail1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDayHail2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayHail4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDayHaild)"><svg:use width="193" height="193" href="#meteoconsOvercastDayHail0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDayHail3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayHail5" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayHail6" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastDayHail7" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayHail8" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsOvercastDayHail9" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayHaila" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastDayHailb" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastDayHailc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDayHaild"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDayHail4"></svg:use><svg:use width="136" height="24" href="#meteoconsOvercastDayHail5" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsOvercastDayHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayHazeIcon],svg[meteocons-overcast-day-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDayHaze0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHaze1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHaze2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayHaze3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDayHaze6)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDayHaze1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDayHaze2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayHaze4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDayHaze7)"><svg:use width="193" height="193" href="#meteoconsOvercastDayHaze0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDayHaze3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayHaze5" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastDayHaze6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDayHaze7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDayHaze4"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastDayHaze5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastDayHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDayRainIcon],svg[meteocons-overcast-day-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDayRain0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayRain1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayRain2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDayRain3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDayRainc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDayRain1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDayRain2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayRain4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDayRaind)"><svg:use width="193" height="193" href="#meteoconsOvercastDayRain0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDayRain3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDayRain5" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayRain6" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastDayRain7" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayRain8" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastDayRain9" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDayRaina" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastDayRainb" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastDayRainc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDayRaind"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDayRain4"></svg:use><svg:use width="128" height="56" href="#meteoconsOvercastDayRain5" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsOvercastDayRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDaySleetIcon],svg[meteocons-overcast-day-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDaySleet0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySleet1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySleet2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySleet3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySleetj)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDaySleet1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDaySleet2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySleet4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySleetk)"><svg:use width="193" height="193" href="#meteoconsOvercastDaySleet0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDaySleet3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySleet5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleet6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySleet7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleet8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySleet9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleeta" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySleetb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsOvercastDaySleetc" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsOvercastDaySleet5"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySleetd" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleete" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySleetf" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleetg" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySleeth" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySleeti" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastDaySleetj"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDaySleetk"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDaySleet4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastDaySleetc" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastDaySleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDaySmokeIcon],svg[meteocons-overcast-day-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDaySmoke0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySmoke1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySmoke2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySmoke3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySmokef)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDaySmoke1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDaySmoke2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySmoke4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySmokeg)"><svg:use width="193" height="193" href="#meteoconsOvercastDaySmoke0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDaySmoke3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySmoke5" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySmoke6" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySmoke7" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastDaySmoke8" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySmoke9" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySmokea" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastDaySmokeb" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastDaySmokec" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySmoked" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastDaySmokee" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsOvercastDaySmokef"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDaySmokeg"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDaySmoke4"></svg:use><svg:use width="173" height="217" href="#meteoconsOvercastDaySmoke5" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsOvercastDaySmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDaySnowIcon],svg[meteocons-overcast-day-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDaySnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDaySnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDaySnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDaySnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastDaySnowd)"><svg:use width="193" height="193" href="#meteoconsOvercastDaySnow0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDaySnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastDaySnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastDaySnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastDaySnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastDaySnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastDaySnowd"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastDaySnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastDaySnow5" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastDaySnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastDrizzleIcon],svg[meteocons-overcast-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastDrizzle0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDrizzle1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastDrizzle2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastDrizzle3)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastDrizzle0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastDrizzle1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:clippath id="meteoconsOvercastDrizzle3"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastDrizzle2" transform="translate(64.34)"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDrizzle4" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDrizzle5" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDrizzle6" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDrizzle7" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastDrizzle8" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastDrizzle9" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsOvercastDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastFogIcon],svg[meteocons-overcast-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastFog0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastFog1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastFog2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastFog4)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastFog0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastFog1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastFog3" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastFog4"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastFog2" transform="translate(64.34)"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastFog3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastHailIcon],svg[meteocons-overcast-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastHail0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastHail1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastHail2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastHaila)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastHail0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastHail1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastHail3" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastHail4" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastHail5" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastHail6" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsOvercastHail7" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsOvercastHail8" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastHail9" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastHaila"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastHail2" transform="translate(64.34)"></svg:use><svg:use width="136" height="24" href="#meteoconsOvercastHail3" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsOvercastHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastHazeIcon],svg[meteocons-overcast-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastHaze0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastHaze1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastHaze2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastHaze4)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastHaze0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastHaze1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastHaze3" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastHaze4"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastHaze2" transform="translate(64.34)"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastHaze3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightIcon],svg[meteocons-overcast-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNight0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNight1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNight2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNight3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNight5)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNight1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNight2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNight4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNight6)"><svg:use width="178" height="178" href="#meteoconsOvercastNight0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNight3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsOvercastNight5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNight6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNight4"></svg:use>`,
})
export class MeteoconsOvercastNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightDrizzleIcon],svg[meteocons-overcast-night-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightDrizzle0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightDrizzle1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightDrizzle2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightDrizzle3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightDrizzle5)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightDrizzle1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightDrizzle2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightDrizzle4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightDrizzle6)"><svg:use width="178" height="178" href="#meteoconsOvercastNightDrizzle0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightDrizzle3" transform="translate(64.34)"></svg:use></svg:symbol><svg:clippath id="meteoconsOvercastNightDrizzle5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightDrizzle6"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightDrizzle4"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightDrizzle7" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightDrizzle8" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightDrizzle9" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightDrizzlea" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightDrizzleb" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightDrizzlec" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsOvercastNightDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightFogIcon],svg[meteocons-overcast-night-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightFog0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightFog1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightFog2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightFog3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightFog6)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightFog1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightFog2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightFog4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightFog7)"><svg:use width="178" height="178" href="#meteoconsOvercastNightFog0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightFog3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightFog5" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastNightFog6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightFog7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightFog4"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastNightFog5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastNightFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightHailIcon],svg[meteocons-overcast-night-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightHail0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHail1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHail2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHail3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightHailc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightHail1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightHail2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightHail4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightHaild)"><svg:use width="178" height="178" href="#meteoconsOvercastNightHail0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightHail3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightHail5" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightHail6" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastNightHail7" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightHail8" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsOvercastNightHail9" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightHaila" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsOvercastNightHailb" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastNightHailc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightHaild"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightHail4"></svg:use><svg:use width="136" height="24" href="#meteoconsOvercastNightHail5" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsOvercastNightHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightHazeIcon],svg[meteocons-overcast-night-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightHaze0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHaze1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHaze2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightHaze3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightHaze6)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightHaze1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightHaze2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightHaze4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightHaze7)"><svg:use width="178" height="178" href="#meteoconsOvercastNightHaze0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightHaze3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightHaze5" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastNightHaze6"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightHaze7"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightHaze4"></svg:use><svg:use width="258" height="66" href="#meteoconsOvercastNightHaze5" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsOvercastNightHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightRainIcon],svg[meteocons-overcast-night-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightRain0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightRain1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightRain2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightRain3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightRainc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightRain1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightRain2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightRain4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightRaind)"><svg:use width="178" height="178" href="#meteoconsOvercastNightRain0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightRain3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightRain5" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightRain6" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastNightRain7" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightRain8" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastNightRain9" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightRaina" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastNightRainb" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastNightRainc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightRaind"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightRain4"></svg:use><svg:use width="128" height="56" href="#meteoconsOvercastNightRain5" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsOvercastNightRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightSleetIcon],svg[meteocons-overcast-night-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightSleet0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSleet1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSleet2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSleet3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSleetj)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightSleet1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightSleet2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSleet4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSleetk)"><svg:use width="178" height="178" href="#meteoconsOvercastNightSleet0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightSleet3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSleet5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleet6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSleet7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleet8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSleet9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleeta" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSleetb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsOvercastNightSleetc" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsOvercastNightSleet5"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSleetd" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleete" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSleetf" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleetg" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSleeth" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSleeti" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastNightSleetj"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightSleetk"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightSleet4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastNightSleetc" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastNightSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightSmokeIcon],svg[meteocons-overcast-night-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightSmoke0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSmoke1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSmoke2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSmoke3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSmokef)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightSmoke1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightSmoke2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSmoke4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSmokeg)"><svg:use width="178" height="178" href="#meteoconsOvercastNightSmoke0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightSmoke3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSmoke5" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSmoke6" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSmoke7" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastNightSmoke8" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSmoke9" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSmokea" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastNightSmokeb" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastNightSmokec" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSmoked" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastNightSmokee" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsOvercastNightSmokef"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightSmokeg"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightSmoke4"></svg:use><svg:use width="173" height="217" href="#meteoconsOvercastNightSmoke5" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsOvercastNightSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastNightSnowIcon],svg[meteocons-overcast-night-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastNightSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastNightSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastNightSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastNightSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsOvercastNightSnowd)"><svg:use width="178" height="178" href="#meteoconsOvercastNightSnow0" transform="translate(65 118)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsOvercastNightSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastNightSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastNightSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastNightSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastNightSnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsOvercastNightSnowd"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsOvercastNightSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastNightSnow5" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastNightSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastRainIcon],svg[meteocons-overcast-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastRain0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastRain1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastRain2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastRaina)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastRain0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastRain1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastRain3" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastRain4" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastRain5" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastRain6" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastRain7" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastRain8" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsOvercastRain9" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastRaina"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastRain2" transform="translate(64.34)"></svg:use><svg:use width="128" height="56" href="#meteoconsOvercastRain3" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsOvercastRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastSleetIcon],svg[meteocons-overcast-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastSleet0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSleet1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSleet2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastSleeth)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastSleet0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastSleet1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastSleet3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSleet4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSleet5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSleet6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSleet7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSleet8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSleet9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsOvercastSleeta" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsOvercastSleet3"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastSleetb" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastSleetc" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastSleetd" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastSleete" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsOvercastSleetf" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsOvercastSleetg" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsOvercastSleeth"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastSleet2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastSleeta" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastSmokeIcon],svg[meteocons-overcast-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastSmoke0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSmoke1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSmoke2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastSmoked)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastSmoke0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastSmoke1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastSmoke3" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastSmoke4" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastSmoke5" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastSmoke6" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastSmoke7" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastSmoke8" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastSmoke9" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsOvercastSmokea" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsOvercastSmokeb" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsOvercastSmokec" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsOvercastSmoked"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastSmoke2" transform="translate(64.34)"></svg:use><svg:use width="173" height="217" href="#meteoconsOvercastSmoke3" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsOvercastSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastSnowIcon],svg[meteocons-overcast-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastSnow0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastSnow2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsOvercastSnowa)"><svg:use width="214.3" height="140.1" href="#meteoconsOvercastSnow0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsOvercastSnow1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsOvercastSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsOvercastSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsOvercastSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsOvercastSnowa"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsOvercastSnow2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsOvercastSnow3" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsOvercastSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayIcon],svg[meteocons-partly-cloudy-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDay0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDay1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDay2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDay3)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDay0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDay1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDay3"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDay2"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayDrizzleIcon],svg[meteocons-partly-cloudy-day-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayDrizzle0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayDrizzle1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayDrizzle2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayDrizzle3)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayDrizzle0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayDrizzle1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayDrizzle3"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayDrizzle2"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayDrizzle4" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayDrizzle5" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayDrizzle6" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayDrizzle7" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayDrizzle8" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayDrizzle9" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPartlyCloudyDayDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayFogIcon],svg[meteocons-partly-cloudy-day-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayFog0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayFog4)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayFog0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayFog1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog3" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayFog4"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayFog2"></svg:use><svg:use width="258" height="66" href="#meteoconsPartlyCloudyDayFog3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayHailIcon],svg[meteocons-partly-cloudy-day-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayHail0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHail1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHail2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayHaila)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayHail0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayHail1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHail3" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayHail4" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayHail5" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayHail6" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayHail7" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayHail8" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayHail9" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayHaila"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayHail2"></svg:use><svg:use width="136" height="24" href="#meteoconsPartlyCloudyDayHail3" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayHazeIcon],svg[meteocons-partly-cloudy-day-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayHaze0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHaze1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHaze2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayHaze4)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayHaze0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayHaze1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayHaze3" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayHaze4"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayHaze2"></svg:use><svg:use width="258" height="66" href="#meteoconsPartlyCloudyDayHaze3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayRainIcon],svg[meteocons-partly-cloudy-day-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayRain0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayRain1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayRain2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayRaina)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayRain0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayRain1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayRain3" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayRain4" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayRain5" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayRain6" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayRain7" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDayRain8" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDayRain9" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayRaina"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayRain2"></svg:use><svg:use width="128" height="56" href="#meteoconsPartlyCloudyDayRain3" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDaySleetIcon],svg[meteocons-partly-cloudy-day-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDaySleet0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySleet1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySleet2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDaySleeth)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDaySleet0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDaySleet1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySleet3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleet4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySleet5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleet6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySleet7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleet8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySleet9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySleeta" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyDaySleet3"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySleetb" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleetc" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySleetd" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleete" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySleetf" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySleetg" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDaySleeth"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDaySleet2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyDaySleeta" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDaySleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDaySmokeIcon],svg[meteocons-partly-cloudy-day-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDaySmoke0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySmoke1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySmoke2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDaySmoked)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDaySmoke0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDaySmoke1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySmoke3" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySmoke4" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySmoke5" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyDaySmoke6" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySmoke7" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySmoke8" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyDaySmoke9" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyDaySmokea" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySmokeb" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyDaySmokec" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDaySmoked"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDaySmoke2"></svg:use><svg:use width="173" height="217" href="#meteoconsPartlyCloudyDaySmoke3" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDaySmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDaySnowIcon],svg[meteocons-partly-cloudy-day-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDaySnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySnow2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDaySnowa)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDaySnow0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDaySnow1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDaySnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyDaySnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyDaySnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDaySnowa"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDaySnow2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyDaySnow3" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDaySnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightIcon],svg[meteocons-partly-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNight0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNight1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNight2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNight3)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNight0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNight1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNight3"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNight2"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightDrizzleIcon],svg[meteocons-partly-cloudy-night-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightDrizzle0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightDrizzle1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightDrizzle2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightDrizzle3)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightDrizzle0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightDrizzle1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightDrizzle3"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightDrizzle2"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightDrizzle4" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightDrizzle5" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightDrizzle6" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightDrizzle7" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightDrizzle8" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightDrizzle9" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPartlyCloudyNightDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightFogIcon],svg[meteocons-partly-cloudy-night-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightFog0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightFog1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightFog2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightFog4)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightFog0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightFog1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightFog3" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightFog4"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightFog2"></svg:use><svg:use width="258" height="66" href="#meteoconsPartlyCloudyNightFog3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightHailIcon],svg[meteocons-partly-cloudy-night-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightHail0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHail1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHail2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightHaila)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightHail0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightHail1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHail3" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightHail4" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightHail5" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightHail6" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightHail7" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightHail8" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightHail9" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightHaila"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightHail2"></svg:use><svg:use width="136" height="24" href="#meteoconsPartlyCloudyNightHail3" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightHazeIcon],svg[meteocons-partly-cloudy-night-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightHaze0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHaze1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHaze2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightHaze4)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightHaze0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightHaze1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightHaze3" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightHaze4"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightHaze2"></svg:use><svg:use width="258" height="66" href="#meteoconsPartlyCloudyNightHaze3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightRainIcon],svg[meteocons-partly-cloudy-night-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightRain0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightRain1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightRain2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightRaina)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightRain0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightRain1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightRain3" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightRain4" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightRain5" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightRain6" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightRain7" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightRain8" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightRain9" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightRaina"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightRain2"></svg:use><svg:use width="128" height="56" href="#meteoconsPartlyCloudyNightRain3" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightSleetIcon],svg[meteocons-partly-cloudy-night-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightSleet0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSleet1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSleet2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightSleeth)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightSleet0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightSleet1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSleet3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleet4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSleet5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleet6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSleet7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleet8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSleet9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSleeta" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyNightSleet3"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSleetb" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleetc" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSleetd" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleete" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSleetf" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSleetg" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightSleeth"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightSleet2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyNightSleeta" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightSmokeIcon],svg[meteocons-partly-cloudy-night-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightSmoke0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSmoke1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSmoke2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightSmoked)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightSmoke0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightSmoke1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSmoke3" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSmoke4" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSmoke5" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyNightSmoke6" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSmoke7" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSmoke8" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyNightSmoke9" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsPartlyCloudyNightSmokea" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSmokeb" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsPartlyCloudyNightSmokec" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightSmoked"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightSmoke2"></svg:use><svg:use width="173" height="217" href="#meteoconsPartlyCloudyNightSmoke3" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyNightSnowIcon],svg[meteocons-partly-cloudy-night-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyNightSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSnow2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyNightSnowa)"><svg:use width="178" height="178" href="#meteoconsPartlyCloudyNightSnow0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyNightSnow1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyNightSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsPartlyCloudyNightSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsPartlyCloudyNightSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:clippath id="meteoconsPartlyCloudyNightSnowa"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyNightSnow2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsPartlyCloudyNightSnow3" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsPartlyCloudyNightSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPollenIcon],svg[meteocons-pollen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPollen0" viewBox="0 0 304 96"><svg:circle cx="152" cy="16" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-0.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="200" cy="72" r="21.3" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.17s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="104" cy="72" r="21.3" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="16" cy="80" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.67s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="288" cy="80" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.5s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="232" cy="24" r="10.7" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="72" cy="24" r="10.7" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.83s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle></svg:symbol></svg:defs><svg:use width="304" height="96" href="#meteoconsPollen0" transform="translate(104 208)"></svg:use>`,
})
export class MeteoconsPollenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPollenFlowerIcon],svg[meteocons-pollen-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPollenFlower0" viewBox="0 0 232 72"><svg:circle cx="116" cy="12" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-0.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="156" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.17s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="76" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="12" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.67s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="220" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.5s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="180" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="52" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.83s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle></svg:symbol></svg:defs><svg:path fill="#f06595" d="M327.5 258.6a74.1 74.1 0 0 0-17.7-5.8a74.3 74.3 0 0 0 10-15.8c13.5-28.5 7.1-59.8-14.2-69.8s-49.6 4.8-63 33.3a74.3 74.3 0 0 0-5.8 17.7a74.5 74.5 0 0 0-15.7-10c-28.5-13.5-59.8-7.1-70 14.2s5 49.6 33.4 63a74.6 74.6 0 0 0 17.7 5.8a74.3 74.3 0 0 0-10 15.8c-13.4 28.5-7 59.7 14.3 69.8s49.5-4.8 63-33.3a74.2 74.2 0 0 0 5.7-17.7a75 75 0 0 0 15.8 10c28.5 13.4 59.8 7 69.9-14.3s-4.9-49.5-33.4-63Zm-72.3 15l-1.8-.7l1-1.7l.7-1.8l1.7 1l1.8.7l-1 1.7l-.7 1.8l-1.7-1Z"></svg:path><svg:path fill="#f8af18" d="M306.3 276.2c-.2-5.9-32-7.2-32-7.2s29-4 26.6-10.6c-.3-.8-1.4-1.3-3.1-1.4c1.2-1 1.8-2.1 1.5-3c-2.3-6.5-27.3 8.7-27.3 8.7s23.8-21.2 20.1-25.8s-22.4 16.9-22.4 16.9s15.5-26.4 8.9-29.6s-17.3 25.6-17.3 25.6s4.8-28.2-1.1-28s-7.2 32-7.2 32s-4-29-10.6-26.6c-.9.3-1.3 1.4-1.4 3c-1.1-1.2-2.2-1.8-3-1.5c-6.5 2.3 8.7 27.3 8.7 27.3s-21.2-23.8-25.8-20.1s16.9 22.4 16.9 22.4s-26.4-15.5-29.6-8.8s25.6 17.2 25.6 17.2s-28.2-4.7-28 1.2s31.9 7.1 31.9 7.1s-29 4-26.6 10.6c.3.9 1.4 1.3 3.1 1.4c-1.2 1.1-1.8 2.1-1.5 3c2.3 6.5 27.3-8.7 27.3-8.7s-23.8 21.2-20.2 25.8s22.4-17 22.4-17s-15.5 26.5-8.8 29.7s17.3-25.6 17.3-25.6s-4.8 28.2 1.1 28s7.2-32 7.2-32s4 29 10.6 26.6c.8-.3 1.3-1.4 1.4-3c1 1.2 2.1 1.8 3 1.4c6.5-2.3-8.7-27.2-8.7-27.2s21.1 23.8 25.8 20.1s-17-22.4-17-22.4s26.5 15.5 29.6 8.8s-25.5-17.2-25.5-17.2s28.2 4.8 28-1.1Z"></svg:path><svg:use width="232" height="72" href="#meteoconsPollenFlower0" transform="translate(140 132)"></svg:use>`,
})
export class MeteoconsPollenFlowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPollenGrassIcon],svg[meteocons-pollen-grass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPollenGrass0" viewBox="0 0 232 72"><svg:circle cx="116" cy="12" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-0.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="156" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.17s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="76" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="12" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.67s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="220" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.5s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="180" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="52" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.83s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle></svg:symbol></svg:defs><svg:path fill="#40c057" d="M264.5 384c.1-14.9.8-109.5 2.4-131.8c1.9-24.2 11-58.6 16.5-84.7S275 128 275 128s13.4 13.4-6.1 72c-18.7 56-14 174-13.5 184Zm24.9-104c-16.8 38.6-19 86.4-19.2 104H287c-1.4-19.6-3.5-76.4 13.6-107.6c21-38.3 39.3-32 39.3-32s-29.7-12.7-50.6 35.6Z"></svg:path><svg:path fill="#40c057" d="M261.5 384h12.8c1.5-21.1 7.2-87.9 19.7-123c15-42 4.3-85.9 4.3-85.9s5.6 43.1-14.3 89c-17 39-21.5 102-22.5 119.9Zm-19.2 0h16.5c-2-11.6-15.9-91.7-30.5-121c-15.8-31.4-27.5-46.1-56.3-57.3c0 0 35.2 15.1 51.7 83a843.4 843.4 0 0 1 18.6 95.3Z"></svg:path><svg:path fill="#40c057" d="M242.6 384c-4-19-19.7-81.8-58.9-99.4c0 0 21.8 23.4 32.4 49.2a219.3 219.3 0 0 1 12.5 50.2Z"></svg:path><svg:use width="232" height="72" href="#meteoconsPollenGrass0" transform="translate(140 132)"></svg:use>`,
})
export class MeteoconsPollenGrassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPollenTreeIcon],svg[meteocons-pollen-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPollenTree0" viewBox="0 0 232 72"><svg:circle cx="116" cy="12" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-0.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="156" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.17s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="76" cy="52" r="16" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="12" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.67s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="220" cy="60" r="12" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.5s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="180" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-1.33s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle><svg:circle cx="52" cy="20" r="8" fill="#f8af18"><svg:animatetransform attributeName="transform" begin="-.83s" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 30; 0 -30"></svg:animatetransform></svg:circle></svg:symbol></svg:defs><svg:path fill="#744e2d" d="m265 403.6l-4-127a12 12 0 0 0-12-11.7h-5a12 12 0 0 0-12 11.7l-4 127a12 12 0 0 0 12 12.4h13.1a12 12 0 0 0 12-12.4Z"></svg:path><svg:ellipse cx="293.9" cy="274.4" fill="#40c057" rx="42.7" ry="42.5"></svg:ellipse><svg:ellipse cx="185.2" cy="255.5" fill="#40c057" rx="42.7" ry="42.5"></svg:ellipse><svg:path fill="#40c057" d="M317.6 146.9a57.5 57.5 0 0 0-10.9 1.1a28.4 28.4 0 1 0-41.1 32.8a56.2 56.2 0 0 0-4.9 22.8a56.9 56.9 0 1 0 57-56.7Z"></svg:path><svg:path fill="#39ad4e" d="M289.2 184.7a57 57 0 0 0-106.3-28.1c-1 0-1.8-.3-2.8-.3a42.4 42.4 0 0 0-11.8 83.1a28 28 0 0 0-2.4 11.3A28.3 28.3 0 0 0 213 272a42.6 42.6 0 0 0 76.2-26a42 42 0 0 0-10.9-28.1a56.1 56.1 0 0 0 10.9-33.2Z"></svg:path><svg:use width="232" height="72" href="#meteoconsPollenTree0" transform="translate(140 90)"></svg:use>`,
})
export class MeteoconsPollenTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureHighIcon],svg[meteocons-pressure-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e34647" d="M293.5 213a7.7 7.7 0 0 1-5.3-2L256 180.1L223.8 211a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 258a7.7 7.7 0 0 1-5.3-2L256 225.1L223.8 256a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 303a7.7 7.7 0 0 1-5.3-2L256 270.1L223.8 301a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 348a7.7 7.7 0 0 1-5.3-2L256 315.1L223.8 346a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPressureHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureHighAltIcon],svg[meteocons-pressure-high-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef4444" d="M285 239.2V182h31v148h-31v-63.4h-58V330h-31V182h31v57.2Z"></svg:path>`,
})
export class MeteoconsPressureHighAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureLowIcon],svg[meteocons-pressure-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a81bf" d="M293.5 298a7.7 7.7 0 0 0-5.3 2L256 330.9L223.8 300a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 253a7.7 7.7 0 0 0-5.3 2L256 285.9L223.8 255a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 208a7.7 7.7 0 0 0-5.3 2L256 240.9L223.8 210a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 163a7.7 7.7 0 0 0-5.3 2L256 195.9L223.8 165a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPressureLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureLowAltIcon],svg[meteocons-pressure-low-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2885c7" d="M234.3 182v120.6H310V330H202V182Z"></svg:path>`,
})
export class MeteoconsPressureLowAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRainIcon],svg[meteocons-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsRain0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsRain1" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain2" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain3" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain4" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain5" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain6" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain7" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsRain0" transform="translate(76.5 140.5)"></svg:use><svg:use width="128" height="56" href="#meteoconsRain1" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRainbowIcon],svg[meteocons-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsRainbow0"><svg:path fill="none" d="M368.4 0v225.6H352a45.2 45.2 0 0 0-38.5 21.5a30.2 30.2 0 0 0-45.6 25.9a29.4 29.4 0 0 0 .5 4.9a32.3 32.3 0 0 0-26.4 31.8v9.8H0V0Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:clippath><svg:symbol id="meteoconsRainbow1" viewBox="0 0 197.5 128.5"><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="12" d="m161.3 62l-1.4.1a45.8 45.8 0 0 0 1.4-10.8a45.3 45.3 0 0 0-83.8-23.8a30.1 30.1 0 0 0-45.6 26a30.5 30.5 0 0 0 .4 4.9a32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke-miterlimit="10" stroke-width="24" clip-path="url(#meteoconsRainbow0)"><svg:path stroke="#f87171" d="M82 310c0-79.5 66.3-144 148-144s148 64.5 148 144"></svg:path><svg:path stroke="#fbbf24" d="M106 310c0-66.3 55.5-120 124-120s124 53.7 124 120"></svg:path><svg:path stroke="#51cf66" d="M130 310c0-53 44.8-96 100-96s100 43 100 96"></svg:path></svg:g><svg:use width="197.5" height="128.5" href="#meteoconsRainbow1" transform="translate(235.94 219.59)"></svg:use>`,
})
export class MeteoconsRainbowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRainbowClearIcon],svg[meteocons-rainbow-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsRainbowClear0"><svg:path fill="none" d="M238 59.1H36V268h52.4l67.4-82.6l82.2-19.2V59.1z"></svg:path></svg:clippath><svg:clippath id="meteoconsRainbowClear1"><svg:path fill="none" d="M368.4 0v225.6H352a45.2 45.2 0 0 0-38.5 21.5a30.2 30.2 0 0 0-45.6 25.9a29.4 29.4 0 0 0 .5 4.9a32.3 32.3 0 0 0-26.4 31.8v9.8H0V0Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:clippath><svg:symbol id="meteoconsRainbowClear2" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsRainbowClear3" viewBox="0 0 197.5 128.5"><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="12" d="m161.3 62l-1.4.1a45.8 45.8 0 0 0 1.4-10.8a45.3 45.3 0 0 0-83.8-23.8a30.1 30.1 0 0 0-45.6 26a30.5 30.5 0 0 0 .4 4.9a32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsRainbowClear0)"><svg:use width="193" height="193" href="#meteoconsRainbowClear2" transform="translate(49.5 79.5)"></svg:use></svg:g><svg:g fill="none" stroke-miterlimit="10" stroke-width="24" clip-path="url(#meteoconsRainbowClear1)"><svg:path stroke="#f87171" d="M82 310c0-79.5 66.3-144 148-144s148 64.5 148 144"></svg:path><svg:path stroke="#fbbf24" d="M106 310c0-66.3 55.5-120 124-120s124 53.7 124 120"></svg:path><svg:path stroke="#51cf66" d="M130 310c0-53 44.8-96 100-96s100 43 100 96"></svg:path></svg:g><svg:use width="197.5" height="128.5" href="#meteoconsRainbowClear3" transform="translate(235.94 219.59)"></svg:use>`,
})
export class MeteoconsRainbowClearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropIcon],svg[meteocons-raindrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsRaindrop0" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="175" height="260.9" href="#meteoconsRaindrop0" transform="translate(168.5 122.62)"></svg:use>`,
})
export class MeteoconsRaindropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropMeasureIcon],svg[meteocons-raindrop-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsRaindropMeasure0" x1="310.5" x2="425.5" y1="152.5" y2="351.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsRaindropMeasure1"><svg:path fill="none"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M168,252H344V380H168Z; M168,220H376V380H168Z; M168,252H344V380H168Z"></svg:animate></svg:path></svg:clippath><svg:symbol id="meteoconsRaindropMeasure2" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="15" d="M256 132c-48.7 72-80 117-80 160.8s35.8 79.2 80 79.2s80-35.5 80-79.3S304.7 204 256 132Z"></svg:path><svg:path fill="none" stroke="url(#meteoconsRaindropMeasure0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M352 132h32v240h-32m8-120h24m-16 56h16m-16-120h16"></svg:path><svg:g clip-path="url(#meteoconsRaindropMeasure1)"><svg:use width="175" height="260.9" href="#meteoconsRaindropMeasure2" transform="translate(168.61 119.2)"></svg:use></svg:g>`,
})
export class MeteoconsRaindropMeasureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropsIcon],svg[meteocons-raindrops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsRaindrops0"><svg:path fill="none" d="M302 137c-48.7 72-80 117-80 160.8s35.8 79.2 80 79.2v135H0V0h302Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .95; 1 1"></svg:animatetransform></svg:path></svg:clippath><svg:symbol id="meteoconsRaindrops1" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"></svg:path></svg:symbol></svg:defs><svg:use width="175" height="260.9" href="#meteoconsRaindrops1" transform="translate(214.5 123.62)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:use><svg:g clip-path="url(#meteoconsRaindrops0)"><svg:use width="175" height="260.9" href="#meteoconsRaindrops1" transform="translate(122.5 123.62)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 .9; 1 1; 1 .9"></svg:animatetransform></svg:use></svg:g>`,
})
export class MeteoconsRaindropsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSleetIcon],svg[meteocons-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSleet0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsSleet1" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsSleet2" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSleet3" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsSleet4" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSleet5" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsSleet6" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSleet7" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsSleet8" viewBox="0 0 155.2 48"><svg:use width="155.2" height="48" href="#meteoconsSleet1"></svg:use><svg:path fill="#0a5ad4" d="M21.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsSleet9" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsSleeta" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M77.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsSleetb" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsSleetc" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M133.6 38a8 8 0 0 1-8-8V18a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsSleetd" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsSleete" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsSleet0" transform="translate(76.5 140.5)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsSleet8" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsSleetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSmokeIcon],svg[meteocons-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSmoke0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsSmoke1" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmoke2" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsSmoke3" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmoke4" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmoke5" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsSmoke6" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmoke7" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmoke8" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsSmoke9" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokea" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsSmoke0" transform="translate(76.5 140.5)"></svg:use><svg:use width="173" height="217" href="#meteoconsSmoke1" transform="translate(169.5 229.5)"></svg:use>`,
})
export class MeteoconsSmokeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSmokeParticlesIcon],svg[meteocons-smoke-particles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSmokeParticles0" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles1" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles2" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles3" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles4" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles5" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles6" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles7" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles8" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles9" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol></svg:defs><svg:use width="173" height="217" href="#meteoconsSmokeParticles0" transform="translate(169.5 147.5)"></svg:use>`,
})
export class MeteoconsSmokeParticlesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSnowIcon],svg[meteocons-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSnow0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsSnow1" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsSnow2" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSnow3" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsSnow4" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSnow5" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsSnow6" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsSnow7" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsSnow0" transform="translate(76.5 140.5)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsSnow1" transform="translate(178.4 338)"></svg:use>`,
})
export class MeteoconsSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSnowflakeIcon],svg[meteocons-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="m372 295.2l-34.3-19.7a83.8 83.8 0 0 0 0-39l34.3-19.7a24 24 0 1 0-24-41.6L313.7 195a81.4 81.4 0 0 0-33.7-19.4V136a24 24 0 0 0-48 0v39.6a84 84 0 0 0-33.7 19.4L164 175.2a24 24 0 1 0-24 41.6l34.3 19.7a83.8 83.8 0 0 0 0 39L140 295.1a24 24 0 1 0 24 41.6l34.3-19.8a80.6 80.6 0 0 0 33.7 19.4V376a24 24 0 0 0 48 0v-39.7a84 84 0 0 0 33.7-19.3l34.3 19.8a24 24 0 1 0 24-41.6Zm-134-8a36 36 0 1 1 49.2-13.2a36 36 0 0 1-49.2 13.2Z"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 .9; 1 1; .9 .9; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 25.75 25.75; 0 0; 25.75 25.75; 0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"></svg:animatetransform></svg:path>`,
})
export class MeteoconsSnowflakeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSnowmanIcon],svg[meteocons-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSnowman0"><svg:path fill="none" d="M119 428.7h271V305.3h-53.1L325 312l-14-9l2-14l12-7h65V81.6H119V282h68l13 8v15l-13 7l-15.2-9H119z"></svg:path></svg:clippath></svg:defs><svg:circle cx="325" cy="297" r="15" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:circle cx="187" cy="297" r="15" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:g clip-path="url(#meteoconsSnowman0)"><svg:circle cx="256" cy="330" r="84" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:circle cx="256" cy="202" r="60" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="#374151" d="M259 231a3 3 0 1 1-3-3a3 3 0 0 1 3 3m-12-5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m-8-6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m26 6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m8-6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7-34a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-40-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path><svg:path fill="#ef4444" d="M280 266h-65.2a7 7 0 0 1-6.8-7.1V249a7 7 0 0 1 7.3-7h81.4a7 7 0 0 1 7.3 7v9.8a7 7 0 0 1-6.8 7.1Z"></svg:path><svg:path fill="#1e293b" d="m290 133.4l-24.1 6.5a.3.3 0 0 1-.3-.2l-9.3-34.5a4 4 0 0 0-5-2.9l-38.5 10.4a4 4 0 0 0-2.9 5l9.3 34.4a.3.3 0 0 1-.2.3l-24.2 6.5a6.7 6.7 0 0 0-4.7 8.2l2.7 10.2a6.7 6.7 0 0 0 8.3 4.7l95.2-25.4a6.7 6.7 0 0 0 4.7-8.3l-2.7-10.2a6.7 6.7 0 0 0-8.3-4.7"></svg:path><svg:path fill="none" stroke="#ef4444" stroke-linecap="square" stroke-miterlimit="10" stroke-width="4" d="m222.1 147.4l38.6-10.3"></svg:path><svg:circle cx="256" cy="205.2" r="8" fill="#ffa94d"></svg:circle><svg:path fill="#374151" d="M264 324a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-8 16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-48a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class MeteoconsSnowmanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSolarEclipseIcon],svg[meteocons-solar-eclipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSolarEclipse0" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsSolarEclipse1" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"></svg:path></svg:symbol><svg:clippath id="meteoconsSolarEclipse2"><svg:path fill="none" d="m238 139l6-73h224v226h-80l-55-6l-82-70l-13-77z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsSolarEclipse2)"><svg:use width="375" height="375" href="#meteoconsSolarEclipse0" transform="translate(74.5 76.5)"></svg:use></svg:g><svg:use width="279" height="279" href="#meteoconsSolarEclipse1" transform="translate(116.5 116.5)"></svg:use>`,
})
export class MeteoconsSolarEclipseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsStarIcon],svg[meteocons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 256 256; 15 256 256; -15 256 256"></svg:animatetransform><svg:animate attributeName="opacity" dur="6s" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path>`,
})
export class MeteoconsStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsStarryNightIcon],svg[meteocons-starry-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsStarryNight0" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="#fcd34d" d="m282.8 162.8l25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 312 144; 15 312 144; -15 312 144"></svg:animatetransform><svg:animate attributeName="opacity" dur="6s" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:path fill="#fcd34d" d="m285.4 193.4l12 12.3a1.2 1.2 0 0 1 .3 1.1l-4.3 16.6a1.2 1.2 0 0 0 2 1.2l12.3-12a1.2 1.2 0 0 1 1.1-.3l16.6 4.3a1.2 1.2 0 0 0 1.2-2l-12-12.3a1.2 1.2 0 0 1-.3-1.1l4.3-16.6a1.2 1.2 0 0 0-2-1.2l-12.3 12a1.2 1.2 0 0 1-1.1.3l-16.7-4.3a1.2 1.2 0 0 0-1.1 2Z"><svg:animatetransform additive="sum" attributeName="transform" begin="-.33s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 306 204; 15 306 204; -15 306 204"></svg:animatetransform><svg:animate attributeName="opacity" begin="-.33s" dur="6s" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:path fill="#fcd34d" d="m337.3 223.7l24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"><svg:animatetransform additive="sum" attributeName="transform" begin="-.67s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 372 222; 15 372 222; -15 372 222"></svg:animatetransform><svg:animate attributeName="opacity" begin="-.67s" dur="6s" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:use width="279" height="279" href="#meteoconsStarryNight0" transform="translate(116.5 116.5)"></svg:use>`,
})
export class MeteoconsStarryNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSunHotIcon],svg[meteocons-sun-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSunHot0"><svg:path fill="none" d="M0 0h512L0 512V0z"></svg:path></svg:clippath><svg:symbol id="meteoconsSunHot1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsSunHot0)"><svg:use width="375" height="375" href="#meteoconsSunHot1" transform="translate(68.5 68.5)"></svg:use></svg:g><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M197.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59; M195.1,353.28c11.42-12,28.8,4.56,40.23-7.44s-6-28.55,5.47-40.55,28.81,4.55,40.24-7.45-6-28.55,5.48-40.55,28.81,4.55,40.23-7.45-5.95-28.55,5.49-40.55,28.8,4.55,40.23-7.45; M197.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59"></svg:animate></svg:path><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" begin="-.5s" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M257.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59; M255.1,353.28c11.42-12,28.8,4.56,40.23-7.44s-5.95-28.55,5.47-40.55,28.81,4.55,40.24-7.45-6-28.55,5.48-40.55,28.81,4.55,40.23-7.45-5.95-28.55,5.49-40.55,28.8,4.55,40.23-7.45; M257.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59"></svg:animate></svg:path>`,
})
export class MeteoconsSunHotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSunriseIcon],svg[meteocons-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSunrise0"><svg:path fill="none" d="M512 306H304l-35.9-31.4a18.4 18.4 0 0 0-24.2 0L208 306H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsSunrise1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsSunrise0)"><svg:use width="375" height="375" href="#meteoconsSunrise1" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40-36l40 36h88"></svg:path>`,
})
export class MeteoconsSunriseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsSunsetIcon],svg[meteocons-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSunset0"><svg:path fill="none" d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsSunset1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsSunset0)"><svg:use width="375" height="375" href="#meteoconsSunset1" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40 36l40-36h88"></svg:path>`,
})
export class MeteoconsSunsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerIcon],svg[meteocons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometer0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometer1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometer2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometer0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometer1"></svg:use></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometer2" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerCelsiusIcon],svg[meteocons-thermometer-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerCelsius0" viewBox="0 0 109.1 73.2"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16q0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6a12.6 12.6 0 0 1 8.6 3a13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1q8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsius1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsius2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsius3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerCelsius1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerCelsius2"></svg:use></svg:symbol></svg:defs><svg:use width="109.1" height="73.2" href="#meteoconsThermometerCelsius0" transform="translate(314 250)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerCelsius3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerCelsiusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerColderIcon],svg[meteocons-thermometer-colder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerColder0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#2885c7"></svg:circle><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerColder1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerColder2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerColder0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerColder1"></svg:use></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerColder2" transform="translate(197 117)"></svg:use><svg:path fill="#2a81bf" d="M372.5 271a4.6 4.6 0 0 0-3.2 1.3L350 290.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M372.5 244a4.6 4.6 0 0 0-3.2 1.3L350 263.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M372.5 217a4.6 4.6 0 0 0-3.2 1.3L350 236.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsThermometerColderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerFahrenheitIcon],svg[meteocons-thermometer-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerFahrenheit0" viewBox="0 0 99.5 70.9"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4ZM99.5 17.9V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9h34.1z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerFahrenheit1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerFahrenheit2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerFahrenheit3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerFahrenheit1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerFahrenheit2"></svg:use></svg:symbol></svg:defs><svg:use width="99.5" height="70.9" href="#meteoconsThermometerFahrenheit0" transform="translate(314 250)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerFahrenheit3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerFahrenheitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerGlassIcon],svg[meteocons-thermometer-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerGlass0" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7M63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerGlass0" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerGlassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerGlassCelsiusIcon],svg[meteocons-thermometer-glass-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerGlassCelsius0" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7M63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerGlassCelsius1" viewBox="0 0 109.1 73.2"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0m6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16q0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6a12.6 12.6 0 0 1 8.6 3a13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1q8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12"></svg:path></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerGlassCelsius0" transform="translate(197 117)"></svg:use><svg:use width="109.1" height="73.2" href="#meteoconsThermometerGlassCelsius1" transform="translate(314 250)"></svg:use>`,
})
export class MeteoconsThermometerGlassCelsiusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerGlassFahrenheitIcon],svg[meteocons-thermometer-glass-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerGlassFahrenheit0" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7M63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerGlassFahrenheit1" viewBox="0 0 99.5 70.9"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0m6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm73.8-7.8V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9z"></svg:path></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerGlassFahrenheit0" transform="translate(197 117)"></svg:use><svg:use width="99.5" height="70.9" href="#meteoconsThermometerGlassFahrenheit1" transform="translate(314 250)"></svg:use>`,
})
export class MeteoconsThermometerGlassFahrenheitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerMercuryIcon],svg[meteocons-thermometer-mercury-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerMercury0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"></svg:path></svg:symbol></svg:defs><svg:use width="72" height="168" href="#meteoconsThermometerMercury0" transform="translate(220 205)"></svg:use>`,
})
export class MeteoconsThermometerMercuryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerMercuryColdIcon],svg[meteocons-thermometer-mercury-cold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerMercuryCold0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#2885c7"></svg:circle><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"></svg:path></svg:symbol></svg:defs><svg:use width="72" height="168" href="#meteoconsThermometerMercuryCold0" transform="translate(220 204)"></svg:use>`,
})
export class MeteoconsThermometerMercuryColdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerMoonIcon],svg[meteocons-thermometer-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerMoon0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerMoon1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerMoon2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerMoon3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerMoon1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerMoon2"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerMoon4"><svg:path fill="none" d="M256 392c31 0 56-25.4 56-56.8a57 57 0 0 0-24-46.6V152.5a32.2 32.2 0 0 0-32-32.5V79.7h167.2V392Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerMoon4)"><svg:use width="178" height="178" href="#meteoconsThermometerMoon0" transform="translate(225 117)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerMoon3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerRaindropIcon],svg[meteocons-thermometer-raindrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerRaindrop0" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerRaindrop1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerRaindrop2"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerRaindrop4"><svg:path fill="none" d="M334 392c-31 0-56-25.4-56-56.8a57 57 0 0 1 24-46.6V152.5a32.2 32.2 0 0 1 32-32.5H167.3v272Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerRaindrop4)"><svg:use width="175" height="260.9" href="#meteoconsThermometerRaindrop0" transform="translate(168.43 123.18)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerRaindrop3" transform="translate(275 117)"></svg:use>`,
})
export class MeteoconsThermometerRaindropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerSnowIcon],svg[meteocons-thermometer-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerSnow0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSnow1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSnow2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerSnow0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerSnow1"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerSnow3"><svg:path fill="none" d="M256 392c31 0 56-25.4 56-56.8a57 57 0 0 0-24-46.6V152.5a32.2 32.2 0 0 0-32-32.5V79.7h167.2V392Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerSnow3)"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" d="m393.7 233l-23.5-13.6a57.8 57.8 0 0 0 0-26.7l23.5-13.7a16.5 16.5 0 1 0-16.5-28.6L353.7 164a56 56 0 0 0-23.2-13.3v-27.2a16.5 16.5 0 0 0-33 0v27.2a57.8 57.8 0 0 0-23.2 13.4l-23.5-13.6a16.5 16.5 0 1 0-16.5 28.5l23.5 13.6a57.8 57.8 0 0 0 0 26.7L234.4 233a16.5 16.5 0 1 0 16.5 28.6l23.5-13.6a55.3 55.3 0 0 0 23.2 13.3v27.2a16.5 16.5 0 0 0 33 0v-27.3a57.7 57.7 0 0 0 23.1-13.3l23.6 13.6a16.5 16.5 0 1 0 16.5-28.5Zm-92-5.5a24.8 24.8 0 1 1 33.8-9a24.8 24.8 0 0 1-33.9 9Z"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 .9; 1 1; .9 .9; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 31.4 20.6; 0 0; 31.4 20.6; 0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 314 206; 6 314 206; -6 314 206"></svg:animatetransform></svg:path></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerSnow2" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerSunIcon],svg[meteocons-thermometer-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerSun0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerSun1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerSun2"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerSun4"><svg:path fill="none" d="M256 392c31 0 56-25.4 56-56.8a57 57 0 0 0-24-46.6V152.5a32.2 32.2 0 0 0-32-32.5V79.7h167.2V392Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerSun4)"><svg:use width="193" height="193" href="#meteoconsThermometerSun0" transform="translate(217.5 109.5)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerSun3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerSunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerWarmerIcon],svg[meteocons-thermometer-warmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerWarmer0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerWarmer1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerWarmer2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerWarmer0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerWarmer1"></svg:use></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerWarmer2" transform="translate(197 117)"></svg:use><svg:path fill="#e34647" d="M372.5 247a4.6 4.6 0 0 1-3.2-1.3L350 227.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M372.5 274a4.6 4.6 0 0 1-3.2-1.3L350 254.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M372.5 301a4.6 4.6 0 0 1-3.2-1.3L350 281.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsThermometerWarmerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerWaterIcon],svg[meteocons-thermometer-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsThermometerWater0"><svg:path fill="none" d="M372 357c-22 0-40-18.1-40-40.5a40.6 40.6 0 0 1 17.1-33.3v-97A23 23 0 0 1 372 163H119.2v194Zm2.9-137h20m-20-22.8h20m-20 45.7h20"></svg:path></svg:clippath><svg:symbol id="meteoconsThermometerWater1" viewBox="0 0 244 92"><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z"></svg:animate><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 15; 0 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsThermometerWater0)"><svg:use width="244" height="92" href="#meteoconsThermometerWater1" transform="translate(134 242)"></svg:use></svg:g><svg:ellipse cx="372" cy="317.1" fill="#ef4444" rx="25.7" ry="25.7"></svg:ellipse><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="17.1" d="M372 231.5V317"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.3" d="M412 316.5c0 22.3-18 40.5-40 40.5s-40-18.1-40-40.5a40.6 40.6 0 0 1 17.1-33.3v-97a22.9 22.9 0 1 1 45.8 0v97a40.6 40.6 0 0 1 17.1 33.3ZM374.9 220h20m-20-22.9h20m-20 45.7h20"></svg:path>`,
})
export class MeteoconsThermometerWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsIcon],svg[meteocons-thunderstorms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstorms0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstorms1" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstorms2" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsThunderstorms0" transform="translate(76.5 140.5)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstorms1" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDayIcon],svg[meteocons-thunderstorms-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDay0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDay1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDay2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDay5)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDay0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDay1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDay3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDay4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDay5"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsThunderstormsDay2"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDay3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDayExtremeIcon],svg[meteocons-thunderstorms-day-extreme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDayExtreme0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtreme1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtreme2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtreme3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayExtreme7)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsDayExtreme1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDayExtreme2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtreme4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayExtreme8)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDayExtreme0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsDayExtreme3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtreme5" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDayExtreme6" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDayExtreme7"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsDayExtreme8"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsDayExtreme4"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDayExtreme5" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDayExtremeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDayExtremeSnowIcon],svg[meteocons-thunderstorms-day-extreme-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDayExtremeSnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayExtremeSnowe)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsDayExtremeSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDayExtremeSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayExtremeSnowf)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDayExtremeSnow0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsDayExtremeSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayExtremeSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayExtremeSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayExtremeSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayExtremeSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayExtremeSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayExtremeSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsDayExtremeSnowc" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDayExtremeSnowd" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDayExtremeSnowe"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsDayExtremeSnowf"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsDayExtremeSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsDayExtremeSnow5" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDayExtremeSnowc" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDayExtremeSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDayOvercastIcon],svg[meteocons-thunderstorms-day-overcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDayOvercast0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercast1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercast2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercast3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayOvercast7)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsDayOvercast1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDayOvercast2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercast4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayOvercast8)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDayOvercast0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsDayOvercast3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercast5" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDayOvercast6" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDayOvercast7"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsDayOvercast8"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsDayOvercast4"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDayOvercast5" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDayOvercastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDayOvercastSnowIcon],svg[meteocons-thunderstorms-day-overcast-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDayOvercastSnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayOvercastSnowe)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsDayOvercastSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDayOvercastSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDayOvercastSnowf)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDayOvercastSnow0" transform="translate(57.5 110.5)"></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsDayOvercastSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayOvercastSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayOvercastSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayOvercastSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayOvercastSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDayOvercastSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDayOvercastSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsDayOvercastSnowc" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDayOvercastSnowd" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDayOvercastSnowe"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsDayOvercastSnowf"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsDayOvercastSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsDayOvercastSnow5" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDayOvercastSnowc" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDayOvercastSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsDaySnowIcon],svg[meteocons-thunderstorms-day-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsDaySnow0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDaySnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsDaySnow2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsThunderstormsDaySnowc)"><svg:use width="193" height="193" href="#meteoconsThunderstormsDaySnow0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsDaySnow1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsDaySnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDaySnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDaySnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDaySnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDaySnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsDaySnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsDaySnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsDaySnowa" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsDaySnowb" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsDaySnowc"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsThunderstormsDaySnow2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsDaySnow3" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsDaySnowa" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsDaySnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsExtremeIcon],svg[meteocons-thunderstorms-extreme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsExtreme0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsExtreme1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsExtreme2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsExtreme5)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsExtreme0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsExtreme1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsExtreme3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsExtreme4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsExtreme5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsExtreme2" transform="translate(64.34)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsExtreme3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsExtremeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsExtremeSnowIcon],svg[meteocons-thunderstorms-extreme-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsExtremeSnow0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsExtremeSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsExtremeSnow2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsExtremeSnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsExtremeSnow0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsExtremeSnow1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsExtremeSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsExtremeSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsExtremeSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsExtremeSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsExtremeSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsExtremeSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsExtremeSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsExtremeSnowa" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsExtremeSnowb" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsExtremeSnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsExtremeSnow2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsExtremeSnow3" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsExtremeSnowa" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsExtremeSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightIcon],svg[meteocons-thunderstorms-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNight0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNight1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNight2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNight5)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNight0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNight1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNight3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNight4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNight5"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsThunderstormsNight2"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNight3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightExtremeIcon],svg[meteocons-thunderstorms-night-extreme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightExtreme0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtreme1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtreme2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtreme3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightExtreme7)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsNightExtreme1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNightExtreme2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtreme4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightExtreme8)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNightExtreme0" transform="translate(65 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsNightExtreme3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtreme5" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNightExtreme6" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNightExtreme7"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsNightExtreme8"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsNightExtreme4"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNightExtreme5" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightExtremeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightExtremeSnowIcon],svg[meteocons-thunderstorms-night-extreme-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightExtremeSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightExtremeSnowe)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsNightExtremeSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNightExtremeSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightExtremeSnowf)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNightExtremeSnow0" transform="translate(65 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsNightExtremeSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightExtremeSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightExtremeSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightExtremeSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightExtremeSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightExtremeSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightExtremeSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsNightExtremeSnowc" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNightExtremeSnowd" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNightExtremeSnowe"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsNightExtremeSnowf"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsNightExtremeSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsNightExtremeSnow5" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNightExtremeSnowc" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightExtremeSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightOvercastIcon],svg[meteocons-thunderstorms-night-overcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightOvercast0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercast1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercast2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercast3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightOvercast7)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsNightOvercast1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNightOvercast2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercast4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightOvercast8)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNightOvercast0" transform="translate(65 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsNightOvercast3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercast5" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNightOvercast6" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNightOvercast7"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsNightOvercast8"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsNightOvercast4"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNightOvercast5" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightOvercastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightOvercastSnowIcon],svg[meteocons-thunderstorms-night-overcast-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightOvercastSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnow1" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnow2" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnow3" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightOvercastSnowe)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsNightOvercastSnow1" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNightOvercastSnow2" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnow4" viewBox="0 0 512 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightOvercastSnowf)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNightOvercastSnow0" transform="translate(65 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsNightOvercastSnow3" transform="translate(64.34)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnow5" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightOvercastSnow6" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightOvercastSnow7" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightOvercastSnow8" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightOvercastSnow9" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightOvercastSnowa" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightOvercastSnowb" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsNightOvercastSnowc" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNightOvercastSnowd" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNightOvercastSnowe"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath><svg:clippath id="meteoconsThunderstormsNightOvercastSnowf"><svg:path fill="none" d="M276 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 72 304H0V0h276Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="512" height="371.5" href="#meteoconsThunderstormsNightOvercastSnow4"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsNightOvercastSnow5" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNightOvercastSnowc" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightOvercastSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightSnowIcon],svg[meteocons-thunderstorms-night-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightSnow0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightSnow2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNightSnowc)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNightSnow0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNightSnow1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsNightSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsNightSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsNightSnowa" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNightSnowb" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNightSnowc"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsThunderstormsNightSnow2"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsNightSnow3" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNightSnowa" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsOvercastIcon],svg[meteocons-thunderstorms-overcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsOvercast0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsOvercast5)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsOvercast0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsOvercast1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsOvercast4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsOvercast5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsOvercast2" transform="translate(64.34)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsOvercast3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsOvercastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsOvercastSnowIcon],svg[meteocons-thunderstorms-overcast-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsOvercastSnow0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercastSnow1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercastSnow2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsOvercastSnowc)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsOvercastSnow0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsOvercastSnow1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercastSnow3" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsOvercastSnow4" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsOvercastSnow5" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsOvercastSnow6" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsOvercastSnow7" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsOvercastSnow8" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsOvercastSnow9" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercastSnowa" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsOvercastSnowb" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsOvercastSnowc"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsOvercastSnow2" transform="translate(64.34)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsOvercastSnow3" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsOvercastSnowa" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsOvercastSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsSnowIcon],svg[meteocons-thunderstorms-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsSnow0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsSnow1" viewBox="0 0 155.2 48"><svg:g><svg:path fill="#86c3db" d="m41.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3A4 4 0 0 0 .5 12A4 4 0 0 0 2 17.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L2 30.5A4 4 0 0 0 .5 36a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 27 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsSnow2" attributeName="opacity" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsSnow3" additive="sum" attributeName="transform" begin="0s; s1.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m97.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4L58 30.5a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8A6 6 0 0 1 83 27a6.1 6.1 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsSnow4" attributeName="opacity" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsSnow5" additive="sum" attributeName="transform" begin="-.83s; s2.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g><svg:g><svg:path fill="#86c3db" d="m153.2 30.5l-5.8-3.3a13.7 13.7 0 0 0 0-6.4l5.8-3.3a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.2V4a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.4l-5.8 3.3a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.6 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2V44a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.8-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.4-5.5Zm-22.6-1.3a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity="0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></svg:animatetransform><svg:animate id="meteoconsThunderstormsSnow6" attributeName="opacity" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:animatetransform id="meteoconsThunderstormsSnow7" additive="sum" attributeName="transform" begin=".83s; s3.end+1s" dur="2s" type="translate" values="0 -36; 0 92;"></svg:animatetransform></svg:g></svg:symbol><svg:symbol id="meteoconsThunderstormsSnow8" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsSnow9" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsThunderstormsSnow0" transform="translate(76.5 140.5)"></svg:use><svg:use width="155.2" height="48" href="#meteoconsThunderstormsSnow1" transform="translate(178.4 338)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsSnow8" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTideHighIcon],svg[meteocons-tide-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTideHigh0" viewBox="-4 -4 252 100"><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z"></svg:animate><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 15; 0 0; 0 15"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="252" height="100" href="#meteoconsTideHigh0" transform="translate(130 238)"></svg:use><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M256 218v-72l-24 27.6l24-27.6l24 27.6"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 -37; 0 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsTideHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTideLowIcon],svg[meteocons-tide-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTideLow0" viewBox="-4 -4 252 100"><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z"></svg:animate><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 15; 0 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M256 146v72l-24-27.6l24 27.6l24-27.6"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 33; 0 0"></svg:animatetransform></svg:path><svg:use width="252" height="100" href="#meteoconsTideLow0" transform="translate(130 238)"></svg:use>`,
})
export class MeteoconsTideLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeAfternoonIcon],svg[meteocons-time-afternoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTimeAfternoon0" viewBox="0 0 291 291"><svg:circle cx="145.5" cy="145.5" r="64.4" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="12"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M145.5 45.6V7.5m0 276v-38m70.7-170.7L243 48M47.9 243.1l27-27m0-141.3L47.8 48M243 243.2l-27-27M45.7 145.6H7.5m276 0h-38"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.5 145.5; 45 145.5 145.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="#374251" d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm52.5 0H197a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l8-5.6a16.3 16.3 0 0 0 4.2-4a7.5 7.5 0 0 0 1.3-4.3a6.3 6.3 0 0 0-1.9-4.9a7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.1-13.8t14.7-5q9.1 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9a26.7 26.7 0 0 1-8.2 7.6l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm28.5-15.1h-20.6v-9.9h20.6Zm31.1 15.1H284v-32h-12.7v-9h2.2q5.5 0 8.7-2.4c2-1.5 3.4-4 4-7.3l.2-.5h11Zm32.1 1.3q-8.8 0-14.4-4a16.2 16.2 0 0 1-6.6-11.5l12.8-1a7.2 7.2 0 0 0 2.8 4.5a8.8 8.8 0 0 0 5.3 1.5a8.5 8.5 0 0 0 6.2-2.2a8.4 8.4 0 0 0 0-11.5a8.5 8.5 0 0 0-6.2-2.2a9.2 9.2 0 0 0-7.1 3l-12.1-1l4.7-28.1H347v10.7h-22.5l-1.7 8.8l.2.1a17.1 17.1 0 0 1 10.4-3q7.8 0 12.5 4.6t4.7 12.5q0 8.6-5.7 13.7t-15.5 5Z"></svg:path><svg:use width="291" height="291" href="#meteoconsTimeAfternoon0" transform="translate(110.38 72.63)"></svg:use>`,
})
export class MeteoconsTimeAfternoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeEveningIcon],svg[meteocons-time-evening-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsTimeEvening0"><svg:path fill="none" d="M0 12h512v282H0z"></svg:path></svg:clippath><svg:symbol id="meteoconsTimeEvening1" viewBox="0 0 291.6 290.6"><svg:ellipse cx="145.8" cy="145.3" fill="none" stroke="#ff922b" stroke-miterlimit="10" stroke-width="12" rx="64.5" ry="64.3"></svg:ellipse><svg:path fill="none" stroke="#ff922b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M145.8 45.5v-38m0 275.6v-38m70.8-170.3l27-27M48 242.9l27-27m0-141l-27-27m195.6 195l-27-27m-171-70.5h-38m276.6 0H246"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.78 145.78; 45 145.78 145.78"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsTimeEvening0)"><svg:use width="291.6" height="290.6" href="#meteoconsTimeEvening1" transform="translate(110.28 168.62)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 320h256"></svg:path><svg:path fill="#374251" d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm48.2-3.1q-6 4.4-16 4.4t-16-4.4a14.2 14.2 0 0 1-6-12a12.2 12.2 0 0 1 2.7-8a13.3 13.3 0 0 1 7.4-4.4v-.2a11 11 0 0 1-5.6-4.1a11.5 11.5 0 0 1-2-6.7a12 12 0 0 1 5.2-10.3q5-3.7 14.3-3.7t14.5 3.7a12 12 0 0 1 5.2 10.3a11.5 11.5 0 0 1-2 6.8a10.7 10.7 0 0 1-5.6 4v.3a13.5 13.5 0 0 1 7.3 4.4a12.1 12.1 0 0 1 2.6 8a14.2 14.2 0 0 1-6 11.9Zm-16-5.3a10.6 10.6 0 0 0 6.7-1.9a7 7 0 0 0 0-10.6a10.6 10.6 0 0 0-6.7-1.9a10.9 10.9 0 0 0-6.9 2a7 7 0 0 0 0 10.5a11 11 0 0 0 7 1.9Zm0-22.6a9.3 9.3 0 0 0 5.9-1.7a5.5 5.5 0 0 0 2-4.6a5.2 5.2 0 0 0-2-4.4a9.8 9.8 0 0 0-5.9-1.6q-8 0-8 6a5.5 5.5 0 0 0 2 4.6a9.4 9.4 0 0 0 6 1.7Zm48.8 15.9h-20.6v-9.9h20.6Zm48.6 15.1h-40.6a20.7 20.7 0 0 1 3-11.5q2.9-4.4 10.7-9.8l8-5.6a16.3 16.3 0 0 0 4.3-4a7.5 7.5 0 0 0 1.2-4.3a6.4 6.4 0 0 0-1.9-4.9a7.2 7.2 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1H275v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.6 9a26.8 26.8 0 0 1-8.2 7.5l-8.8 5.6c-1.7 1-2.6 2-2.8 2.8H315Zm33.5 0H335v-32h-12.7v-9h2.1q5.6 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.2-.5h11Z"></svg:path>`,
})
export class MeteoconsTimeEveningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeLateAfternoonIcon],svg[meteocons-time-late-afternoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTimeLateAfternoon0" viewBox="0 0 291.6 290.6"><svg:ellipse cx="145.8" cy="145.3" fill="none" stroke="#ff922b" stroke-miterlimit="10" stroke-width="12" rx="64.5" ry="64.3"></svg:ellipse><svg:path fill="none" stroke="#ff922b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M145.8 45.5v-38m0 275.6v-38m70.8-170.3l27-27M48 242.9l27-27m0-141l-27-27m195.6 195l-27-27m-171-70.5h-38m276.6 0H246"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.78 145.78; 45 145.78 145.78"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="#374251" d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm32 1.3q-8.8 0-14.4-4a16.1 16.1 0 0 1-6.6-11.5l12.9-1a7.2 7.2 0 0 0 2.7 4.5a8.8 8.8 0 0 0 5.3 1.5a8.4 8.4 0 0 0 6.2-2.2a8.4 8.4 0 0 0 0-11.5a8.5 8.5 0 0 0-6.2-2.2a9.2 9.2 0 0 0-7.1 3l-12.1-1l4.7-28.2h32.2v10.7h-22.5l-1.7 8.8l.3.2a17.1 17.1 0 0 1 10.3-3q7.8 0 12.5 4.6t4.7 12.5q0 8.6-5.6 13.6t-15.6 5.2Zm49-16.4h-20.6v-9.9h20.6Zm31.1 15.1H284v-32h-12.7v-9h2.2q5.5 0 8.7-2.4c2-1.5 3.4-4 4-7.3l.2-.5h11Zm48.3-3.1q-6 4.4-16 4.4t-16-4.4a14.2 14.2 0 0 1-6-12a12.2 12.2 0 0 1 2.7-8a13.2 13.2 0 0 1 7.3-4.4v-.2a11 11 0 0 1-5.5-4.1a11.4 11.4 0 0 1-2.1-6.8a12 12 0 0 1 5.1-10.2q5.2-3.7 14.4-3.7t14.5 3.7a11.9 11.9 0 0 1 5.2 10.2a11.5 11.5 0 0 1-2 6.8a10.6 10.6 0 0 1-5.7 4.1v.3a13.6 13.6 0 0 1 7.4 4.4a12.2 12.2 0 0 1 2.6 8a14.2 14.2 0 0 1-6 11.9Zm-16-5.3a10.7 10.7 0 0 0 6.7-1.9a7 7 0 0 0 0-10.6a10.6 10.6 0 0 0-6.7-1.9a10.9 10.9 0 0 0-6.9 2a6.9 6.9 0 0 0 0 10.5a10.9 10.9 0 0 0 6.9 1.9Zm0-22.6a9.3 9.3 0 0 0 5.9-1.7a5.5 5.5 0 0 0 2-4.6a5.2 5.2 0 0 0-2-4.4a9.8 9.8 0 0 0-6-1.6q-8 0-8 6a5.5 5.5 0 0 0 2.1 4.6a9.5 9.5 0 0 0 6 1.7Z"></svg:path><svg:use width="291.6" height="290.6" href="#meteoconsTimeLateAfternoon0" transform="translate(110.33 72.62)"></svg:use>`,
})
export class MeteoconsTimeLateAfternoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeLateEveningIcon],svg[meteocons-time-late-evening-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTimeLateEvening0" viewBox="0 0 203 203"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M185 125.5a95 95 0 0 1-95.6-94.3a92.8 92.8 0 0 1 3.2-23.7a94.8 94.8 0 0 0-85.1 93.7a95 95 0 0 0 95.6 94.3c44.5 0 81.8-30 92.4-70.7a95.8 95.8 0 0 1-10.5.7Z"></svg:path></svg:symbol><svg:symbol id="meteoconsTimeLateEvening1" viewBox="0 0 197.5 128.5"><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="12" d="m161.3 62l-1.4.1a45.8 45.8 0 0 0 1.4-10.8a45.3 45.3 0 0 0-83.8-23.8a30.1 30.1 0 0 0-45.6 26a30.5 30.5 0 0 0 .4 4.9a32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"></svg:path></svg:symbol><svg:clippath id="meteoconsTimeLateEvening2"><svg:path fill="none" d="M326.6 239a45.4 45.4 0 0 0-38.6 21.4a30 30 0 0 0-45.3 30.7a32.3 32.3 0 0 0-26.4 31.6L219 334H0V0h326.6Z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsTimeLateEvening2)"><svg:use width="203" height="203" href="#meteoconsTimeLateEvening0" transform="translate(154.5 134.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"></svg:animatetransform></svg:use></svg:g><svg:path fill="#374251" d="M220.2 438.4h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.3 16.3 0 0 0 4.3-4a7.5 7.5 0 0 0 1.2-4.3a6.3 6.3 0 0 0-1.9-4.9a7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9a26.7 26.7 0 0 1-8.2 7.5l-8.9 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm33.6 0h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm30-15.1h-20.5v-9.9h20.5Zm44.6 9q-6 7.2-16.2 7.2t-16.3-7.2q-6-7.3-6-19.7t6-19.4q5.9-7.2 16.3-7.2q10.2 0 16.2 7.2t6 19.4q0 12.4-6 19.7Zm-16.2-3.2q9.3 0 9.3-16.4t-9.3-16.3q-9.5 0-9.5 16.3t9.5 16.4Z"></svg:path><svg:use width="197.5" height="128.5" href="#meteoconsTimeLateEvening1" transform="translate(210.31 232.95)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-6 0; 6 0; -6 0"></svg:animatetransform></svg:use>`,
})
export class MeteoconsTimeLateEveningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeLateMorningIcon],svg[meteocons-time-late-morning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsTimeLateMorning0"><svg:path fill="none" d="M0 12h512v282H0z"></svg:path></svg:clippath><svg:symbol id="meteoconsTimeLateMorning1" viewBox="0 0 291 291"><svg:circle cx="145.5" cy="145.5" r="64.4" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="12"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M145.5 45.6V7.5m0 276v-38m70.7-170.7L243 48M47.9 243.1l27-27m0-141.3L47.8 48M243 243.2l-27-27M45.7 145.6H7.5m276 0h-38"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.5 145.5; 45 145.5 145.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsTimeLateMorning0)"><svg:use width="291" height="291" href="#meteoconsTimeLateMorning1" transform="translate(110.44 110.63)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 320h256"></svg:path><svg:path fill="#374251" d="M214.5 392q7.2 6.8 7.2 20.6q0 13-5.8 20.2t-16.6 7.2c-5 0-9.3-1.1-12.6-3.4a16.3 16.3 0 0 1-6.7-9.6l12.4-.8c1 2.7 3.4 4 7 4a8 8 0 0 0 6.7-3q2.3-3 2.8-9.6q-4.5 5.3-12.4 5.3q-8.1 0-13.1-4.8t-5.2-12.9a17.9 17.9 0 0 1 5.8-13.8q5.7-5.2 15-5.2t15.5 5.8Zm-15 21.3a8.2 8.2 0 0 0 6-2.3a9 9 0 0 0 2.6-6.2a8.6 8.6 0 0 0-2.1-5.4a8.3 8.3 0 0 0-6.6-2.8a8 8 0 0 0-6.2 2.3a8.4 8.4 0 0 0-2.2 6a8.1 8.1 0 0 0 2.4 6.1a8.4 8.4 0 0 0 6.2 2.3Zm49.2 10h-20.5v-9.9h20.5Zm31.2 15.1h-13.5v-32h-12.6v-9h2.1q5.6 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.2-.5h11Zm52.5 0h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.4 16.4 0 0 0 4.3-4a7.5 7.5 0 0 0 1.2-4.3a6.4 6.4 0 0 0-1.8-4.9a7.1 7.1 0 0 0-5.1-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4c3.6 3 5.4 7 5.4 12.2a16.1 16.1 0 0 1-2.6 9a26.7 26.7 0 0 1-8.2 7.5l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Z"></svg:path>`,
})
export class MeteoconsTimeLateMorningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeLateNightIcon],svg[meteocons-time-late-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTimeLateNight0" viewBox="0 0 203 203"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M185 125.5a95 95 0 0 1-95.6-94.3a92.8 92.8 0 0 1 3.2-23.7a94.8 94.8 0 0 0-85.1 93.7a95 95 0 0 0 95.6 94.3c44.5 0 81.8-30 92.4-70.7a95.8 95.8 0 0 1-10.5.7Z"></svg:path></svg:symbol></svg:defs><svg:path fill="#374251" d="M227.6 410.7a13.4 13.4 0 0 1 8 4.3a12.3 12.3 0 0 1 3 8.3a15 15 0 0 1-5.5 11.8q-5.4 4.7-15.2 4.7q-10.1 0-15.6-5t-5.9-14h12.3q.5 8.8 8.8 8.8a8.7 8.7 0 0 0 5.7-1.8a6 6 0 0 0 2.2-4.9a5.6 5.6 0 0 0-2.3-4.8a10.5 10.5 0 0 0-6.3-1.6h-3.6v-9h3.8a8 8 0 0 0 5.2-1.5a5.2 5.2 0 0 0 1.9-4.3a5.4 5.4 0 0 0-1.9-4.4a7.9 7.9 0 0 0-5.2-1.5a7 7 0 0 0-5 1.6q-1.7 1.7-2 5.4h-12q.7-16.9 19.4-17q8.9 0 13.9 4a12 12 0 0 1 5 10a11.1 11.1 0 0 1-2.3 7a11.3 11.3 0 0 1-6.4 4Zm38.7 12.6h-20.6v-9.9h20.6ZM298 403q8.1 0 13.2 4.8t5.1 13a17.9 17.9 0 0 1-5.8 13.7q-5.7 5.3-15 5.3T280 434q-7.1-6.8-7.1-20.7q0-13 5.7-20.2t16.6-7.2a21.8 21.8 0 0 1 12.6 3.4a16.6 16.6 0 0 1 6.7 9.7l-12.5.7c-1-2.7-3.3-4-6.9-4a7.9 7.9 0 0 0-6.7 3q-2.3 3-2.8 9.7Q290 403 298 403Zm-9.6 23.6a8.6 8.6 0 0 0 6.7 2.8a7.8 7.8 0 0 0 6.1-2.4a8.9 8.9 0 0 0 2.2-6a8 8 0 0 0-2.4-6a8.5 8.5 0 0 0-6-2.3a8.3 8.3 0 0 0-6.1 2.3a9 9 0 0 0-2.5 6.1a9.1 9.1 0 0 0 2 5.5Z"></svg:path><svg:use width="203" height="203" href="#meteoconsTimeLateNight0" transform="translate(154.5 134.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"></svg:animatetransform></svg:use>`,
})
export class MeteoconsTimeLateNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeMorningIcon],svg[meteocons-time-morning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsTimeMorning0"><svg:path fill="none" d="M0 12h512v282H0z"></svg:path></svg:clippath><svg:symbol id="meteoconsTimeMorning1" viewBox="0 0 291 291"><svg:circle cx="145.5" cy="145.5" r="64.4" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="12"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M145.5 45.6V7.5m0 276v-38m70.7-170.7L243 48M47.9 243.1l27-27m0-141.3L47.8 48M243 243.2l-27-27M45.7 145.6H7.5m276 0h-38"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.5 145.5; 45 145.5 145.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsTimeMorning0)"><svg:use width="291" height="291" href="#meteoconsTimeMorning1" transform="translate(110.5 168.5)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 320h256"></svg:path><svg:path fill="#374251" d="M220.8 403q8.2 0 13.3 4.8t5 13a17.9 17.9 0 0 1-5.7 13.7q-5.7 5.3-15 5.3t-15.5-5.8q-7.1-6.8-7.1-20.7q0-13 5.7-20.2t16.6-7.2a21.8 21.8 0 0 1 12.6 3.4a16.6 16.6 0 0 1 6.7 9.7l-12.5.7c-1-2.7-3.3-4-6.9-4a7.9 7.9 0 0 0-6.7 3q-2.3 3-2.8 9.7q4.3-5.4 12.3-5.4Zm-9.5 23.6a8.6 8.6 0 0 0 6.7 2.8a7.8 7.8 0 0 0 6.1-2.4a8.9 8.9 0 0 0 2.2-6a8 8 0 0 0-2.4-6a8.4 8.4 0 0 0-6.1-2.3a8.2 8.2 0 0 0-6 2.3a9 9 0 0 0-2.5 6.1a9.1 9.1 0 0 0 2 5.5Zm55-3.3h-20.6v-9.9h20.6Zm42.8-31.3q7.2 6.8 7.2 20.6q0 13-5.7 20.2t-16.7 7.2q-7.5 0-12.6-3.4a16.4 16.4 0 0 1-6.6-9.6l12.4-.8c1 2.7 3.3 4 6.9 4a8 8 0 0 0 6.7-3q2.4-3 2.9-9.6q-4.5 5.3-12.4 5.3q-8.2 0-13.2-4.8t-5.1-12.9a17.9 17.9 0 0 1 5.7-13.7q5.7-5.3 15-5.3t15.5 5.8Zm-14.9 21.3a8.1 8.1 0 0 0 6-2.3a9 9 0 0 0 2.5-6.2a8.7 8.7 0 0 0-2-5.4a8.4 8.4 0 0 0-6.7-2.8a8 8 0 0 0-6.1 2.3a8.4 8.4 0 0 0-2.2 6a8.1 8.1 0 0 0 2.3 6.1a8.4 8.4 0 0 0 6.2 2.3Z"></svg:path>`,
})
export class MeteoconsTimeMorningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTimeNightIcon],svg[meteocons-time-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsTimeNight0" viewBox="0 0 203 203"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M185 125.5a95 95 0 0 1-95.6-94.3a92.8 92.8 0 0 1 3.2-23.7a94.8 94.8 0 0 0-85.1 93.7a95 95 0 0 0 95.6 94.3c44.5 0 81.8-30 92.4-70.7a95.8 95.8 0 0 1-10.5.7Z"></svg:path></svg:symbol></svg:defs><svg:path fill="#374251" d="M233.8 432.3q-6 7.2-16.3 7.2t-16.3-7.2q-6-7.3-6-19.7t6-19.4q6-7.2 16.3-7.2q10.2 0 16.3 7.2t6 19.4q0 12.4-6 19.7Zm-16.3-3.2q9.4 0 9.4-16.4t-9.4-16.3q-9.4 0-9.4 16.3t9.4 16.4Zm48.8-5.8h-20.6v-9.9h20.6Zm38.4-12.6a13.4 13.4 0 0 1 8 4.3a12.3 12.3 0 0 1 3 8.3a15 15 0 0 1-5.5 11.8q-5.4 4.7-15.1 4.7q-10.2 0-15.7-5t-5.9-14h12.3q.5 8.8 8.8 8.8a8.7 8.7 0 0 0 5.7-1.8a6 6 0 0 0 2.2-4.9a5.6 5.6 0 0 0-2.3-4.8a10.5 10.5 0 0 0-6.3-1.6h-3.6v-9h3.8a8 8 0 0 0 5.2-1.5a5.2 5.2 0 0 0 1.9-4.3a5.4 5.4 0 0 0-1.9-4.4a7.9 7.9 0 0 0-5.2-1.5a7 7 0 0 0-5 1.6q-1.7 1.7-2 5.4h-12q.7-16.9 19.5-17q8.8 0 13.8 4a12 12 0 0 1 5 10a11.1 11.1 0 0 1-2.3 7a11.3 11.3 0 0 1-6.4 4Z"></svg:path><svg:path fill="#fcd34d" d="m282.8 162.8l25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 312 144; 15 312 144; -15 312 144"></svg:animatetransform><svg:animate attributeName="opacity" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:path fill="#fcd34d" d="m285.4 193.4l12 12.3a1.2 1.2 0 0 1 .3 1.1l-4.3 16.6a1.2 1.2 0 0 0 2 1.2l12.3-12a1.2 1.2 0 0 1 1.1-.3l16.6 4.3a1.2 1.2 0 0 0 1.2-2l-12-12.3a1.2 1.2 0 0 1-.3-1.1l4.3-16.6a1.2 1.2 0 0 0-2-1.2l-12.3 12a1.2 1.2 0 0 1-1.1.3l-16.7-4.3a1.2 1.2 0 0 0-1.1 2Z"><svg:animatetransform additive="sum" attributeName="transform" begin="-.33s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 306 204; 15 306 204; -15 306 204"></svg:animatetransform><svg:animate attributeName="opacity" begin="-.33s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:path fill="#fcd34d" d="m337.3 223.7l24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"><svg:animatetransform additive="sum" attributeName="transform" begin="-.67s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 372 222; 15 372 222; -15 372 222"></svg:animatetransform><svg:animate attributeName="opacity" begin="-.67s" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="1; .75; 1; .75; 1; .75; 1"></svg:animate></svg:path><svg:use width="203" height="203" href="#meteoconsTimeNight0" transform="translate(154.5 134.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"></svg:animatetransform></svg:use>`,
})
export class MeteoconsTimeNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsTornadoIcon],svg[meteocons-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 160h240"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M152 208h208"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M172 256h168"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-36 0; 36 0; -36 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M192 304h128"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M224 352h64"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-60 0; 60 0; -60 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsTornadoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaIcon],svg[meteocons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M304 355a24 24 0 0 1-48 0V156"></svg:path><svg:g><svg:path fill="#ef4444" d="M251.7 141c-64.3 2-115.7 44.2-115.7 96l12.7-5.8c18-8.3 41-8 58.5.5l7.8 3.8c-4.8-47.3 27.7-85 36.7-94.4Zm8.6 0c9 9.5 41.6 47.2 36.7 94.4l7.8-3.7a71.1 71.1 0 0 1 58.5-.6L376 237c0-51.9-51.4-94.1-115.7-96Z"></svg:path><svg:path fill="#ef4444" d="M256 145.3c-8.5 9-39.8 45.9-35 90.2l4-2a70.8 70.8 0 0 1 62 0l4 2c4.8-44.3-26.5-81.1-35-90.2Z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaWindIcon],svg[meteocons-umbrella-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsUmbrellaWind0" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M220 360a24 24 0 1 1-34-34l1.8-1.8L326 186"></svg:path><svg:g transform="rotate(45 256 256)"><svg:g fill="#ef4444"><svg:path d="M251.7 141.1c-64.3 1.8-115.8 44-115.7 95.9l12.7-5.8a71.2 71.2 0 0 1 58.5.5l7.9 3.7c-5-47.1 27.6-84.9 36.6-94.3Zm8.6 0c9 9.4 41.5 47.2 36.6 94.3l7.9-3.7a71.1 71.1 0 0 1 58.5-.5L376 237c0-52-51.4-94.1-115.7-95.9Z"></svg:path><svg:path d="M291 235.5c4.8-44.3-26.4-81.1-35-90.2c-8.5 9-39.8 45.9-35 90.2l4-2a70.9 70.9 0 0 1 62 0Z"></svg:path></svg:g><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g><svg:use width="138" height="96" href="#meteoconsUmbrellaWind0" transform="translate(62.5 201)"></svg:use>`,
})
export class MeteoconsUmbrellaWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaWindAltIcon],svg[meteocons-umbrella-wind-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsUmbrellaWindAlt0" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M220 360a24 24 0 1 1-34-34l1.8-1.8L305 207"></svg:path><svg:g transform="rotate(45 256 256)"><svg:g fill="#ef4444"><svg:path d="m215.8 114l-7.9 3.8a71.1 71.1 0 0 1-58.5.5l-12.8-5.7c.1 51.8 51.6 94.1 115.8 96c-9-9.6-41.6-47.3-36.6-94.5Z"></svg:path><svg:path d="M221.8 114c-4.9 44.5 26.4 81.2 35 90.2c8.4-9 39.7-45.9 34.8-90.2l-4 2a70.8 70.8 0 0 1-61.9 0Z"></svg:path><svg:path d="M363.9 118.4a71.2 71.2 0 0 1-58.5-.5l-7.8-3.8c4.9 47.2-27.6 85-36.7 94.4c64.4-1.9 115.7-44.1 115.8-96Z"></svg:path></svg:g><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g><svg:use width="138" height="96" href="#meteoconsUmbrellaWindAlt0" transform="translate(62.5 201)"></svg:use>`,
})
export class MeteoconsUmbrellaWindAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndexIcon],svg[meteocons-uv-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex0"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex0)"><svg:use width="375" height="375" href="#meteoconsUvIndex1" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:path fill="#374251" d="M337.7 388q-14.4 0-22.1-6.8t-7.8-19.3V316h18.3v46q0 11 11.7 11t11.6-11v-46h18.3v45.9q0 12.7-7.8 19.4t-22.2 6.7Zm75.7-43.5l8.2-28.5h18.6l-22.6 69.8h-19.4L375.8 316h18.8l8.2 28.4l5.4 22Z"></svg:path>`,
})
export class MeteoconsUvIndexIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex1Icon],svg[meteocons-uv-index-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex10"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex11" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex10)"><svg:use width="375" height="375" href="#meteoconsUvIndex11" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#91c700" rx="48"></svg:rect><svg:path fill="#fff" d="M366.4 388h-19v-45h-17.8v-12.6h3q7.8 0 12.4-3.4q4.2-3.1 5.5-10.2l.2-.8h15.6Z"></svg:path>`,
})
export class MeteoconsUvIndex1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex10Icon],svg[meteocons-uv-index-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex100"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex101" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex100)"><svg:use width="375" height="375" href="#meteoconsUvIndex101" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff3c00" rx="48"></svg:rect><svg:path fill="#fff" d="M334.4 388h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Zm63.9-9.8q-8.2 9.8-21.9 9.8t-21.9-9.8q-8.1-9.7-8.1-26.4q0-16.5 8.1-26.1q8-9.7 21.9-9.7q13.7 0 21.9 9.7t8 26.1q0 16.6-8 26.4Zm-21.9-4.2q12.6 0 12.6-22t-12.6-22q-12.7 0-12.7 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsUvIndex10Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex11Icon],svg[meteocons-uv-index-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex110"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex111" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex110)"><svg:use width="375" height="375" href="#meteoconsUvIndex111" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#9936d4" rx="48"></svg:rect><svg:path fill="#fff" d="M345 388h-18.9v-45h-17.8v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8H345Zm46.7 0h-19v-45H355v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Z"></svg:path>`,
})
export class MeteoconsUvIndex11Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex2Icon],svg[meteocons-uv-index-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex20"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex21" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex20)"><svg:use width="375" height="375" href="#meteoconsUvIndex21" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#91c700" rx="48"></svg:rect><svg:path fill="#fff" d="M379.9 388h-55.7q0-9.4 4-15.7q4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5a10.2 10.2 0 0 0 1.7-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"></svg:path>`,
})
export class MeteoconsUvIndex2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex3Icon],svg[meteocons-uv-index-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex30"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex31" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex30)"><svg:use width="375" height="375" href="#meteoconsUvIndex31" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ffb800" rx="48"></svg:rect><svg:path fill="#fff" d="M365.5 349.2a17.8 17.8 0 0 1 10.8 5.7a16.4 16.4 0 0 1 3.8 11.2a20 20 0 0 1-7.2 15.7q-7.3 6.2-20.3 6.2q-13.6 0-21-6.7t-7.8-18.6h16.5q.6 11.7 11.7 11.7a11.6 11.6 0 0 0 7.7-2.4a8.1 8.1 0 0 0 2.8-6.5a7.5 7.5 0 0 0-3-6.5a14 14 0 0 0-8.4-2.2h-4.9v-12h5.2c3 0 5.3-.6 7-2a7 7 0 0 0 2.4-5.7a7.2 7.2 0 0 0-2.4-5.8c-1.7-1.4-4-2-7-2s-5.2.7-6.8 2.1s-2.4 3.9-2.7 7.2H326q1-22.6 26-22.6q11.8 0 18.5 5.2a16.1 16.1 0 0 1 6.6 13.3a14.9 14.9 0 0 1-3 9.3a15.2 15.2 0 0 1-8.6 5.4Z"></svg:path>`,
})
export class MeteoconsUvIndex3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex4Icon],svg[meteocons-uv-index-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex40"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex41" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex40)"><svg:use width="375" height="375" href="#meteoconsUvIndex41" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ffb800" rx="48"></svg:rect><svg:path fill="#fff" d="M372.2 316v42.5l10.5-.3v14.3l-10.6-.3V388h-17.6v-15.8l-33.2.3V356l32.5-40.1Zm-36.6 42.5h19v-22.8h-.3Z"></svg:path>`,
})
export class MeteoconsUvIndex4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex5Icon],svg[meteocons-uv-index-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex50"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex51" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex50)"><svg:use width="375" height="375" href="#meteoconsUvIndex51" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ffb800" rx="48"></svg:rect><svg:path fill="#fff" d="M351.8 388q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6a12 12 0 0 0 7.2 2.2a11.6 11.6 0 0 0 8.5-3a10.5 10.5 0 0 0 3-8a10.4 10.4 0 0 0-3-7.8a11.6 11.6 0 0 0-8.5-3a12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5l6.4-38.6H376v14.7h-30.9l-2.3 12l.3.2q5.6-4 14.2-4q10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"></svg:path>`,
})
export class MeteoconsUvIndex5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex6Icon],svg[meteocons-uv-index-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex60"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex61" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex60)"><svg:use width="375" height="375" href="#meteoconsUvIndex61" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff8d00" rx="48"></svg:rect><svg:path fill="#fff" d="M356.5 338.8q11 0 17.7 6.5t6.8 17.3q0 11.3-7.7 18.4t-20.2 7q-12.6 0-20.6-7.7q-9.5-9-9.5-27.7q0-17.5 7.6-27t22.2-9.6q10.1 0 16.8 4.6a22.3 22.3 0 0 1 9 13l-16.6 1q-2.1-5.6-9.3-5.6q-6 0-9 4t-3.7 13q5.8-7.2 16.5-7.2Zm-12.7 31.6a11.5 11.5 0 0 0 8.8 3.7q5.4 0 8.3-3.2a11.9 11.9 0 0 0 2.9-8a10.6 10.6 0 0 0-3.2-8a11.2 11.2 0 0 0-8.2-3.1a11 11 0 0 0-8 3a12 12 0 0 0-3.4 8.2a12.3 12.3 0 0 0 2.8 7.4Z"></svg:path>`,
})
export class MeteoconsUvIndex6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex7Icon],svg[meteocons-uv-index-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex70"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex71" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex70)"><svg:use width="375" height="375" href="#meteoconsUvIndex71" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff8d00" rx="48"></svg:rect><svg:path fill="#fff" d="M355.3 388h-20q0-13.7 6.5-29a88.4 88.4 0 0 1 17.9-26.7h-35.5V316h55.6v14.7q-12.3 13.1-18.2 26.8a81.8 81.8 0 0 0-6.3 30.5Z"></svg:path>`,
})
export class MeteoconsUvIndex7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex8Icon],svg[meteocons-uv-index-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex80"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex81" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex80)"><svg:use width="375" height="375" href="#meteoconsUvIndex81" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff3c00" rx="48"></svg:rect><svg:path fill="#fff" d="M373.4 382.1q-7.9 5.9-21.4 5.9t-21.4-5.9a19 19 0 0 1-7.9-16a16.2 16.2 0 0 1 3.5-10.7a17.7 17.7 0 0 1 9.9-5.9v-.2a14.8 14.8 0 0 1-7.5-5.6a15.3 15.3 0 0 1-2.7-9a16 16 0 0 1 6.8-13.7q7-5 19.3-5t19.3 5a16 16 0 0 1 7 13.7a15.4 15.4 0 0 1-2.8 9.1a14.3 14.3 0 0 1-7.4 5.5v.3a18.1 18.1 0 0 1 9.8 5.9a16.2 16.2 0 0 1 3.5 10.6a19 19 0 0 1-8 16Zm-21.3-7q5.6 0 9-2.5a8.5 8.5 0 0 0 3.2-7.1a8.5 8.5 0 0 0-3.2-7.1c-2.2-1.7-5.2-2.5-9-2.5s-7 .8-9.2 2.5a8.5 8.5 0 0 0-3.2 7a8.4 8.4 0 0 0 3.3 7.2a15 15 0 0 0 9 2.5Zm0-30.3q5 0 7.8-2.3a7.4 7.4 0 0 0 2.9-6.1a7 7 0 0 0-2.8-6a13 13 0 0 0-8-2q-10.7 0-10.7 8a7.4 7.4 0 0 0 2.8 6.2q2.8 2.1 8 2.1Z"></svg:path>`,
})
export class MeteoconsUvIndex8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex9Icon],svg[meteocons-uv-index-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex90"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex91" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex90)"><svg:use width="375" height="375" href="#meteoconsUvIndex91" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff3c00" rx="48"></svg:rect><svg:path fill="#fff" d="M371.4 323.7q9.7 9 9.7 27.6q0 17.5-7.7 27.1t-22.3 9.6q-10.1 0-16.8-4.6a21.9 21.9 0 0 1-9-12.8l16.6-1.1q2.1 5.5 9.3 5.5q5.9 0 9-4t3.8-13q-6 7.1-16.6 7.1q-10.9 0-17.6-6.4t-6.9-17.3q0-11.2 7.8-18.4t20-7q12.7 0 20.7 7.7Zm-20 28.5a11 11 0 0 0 8.2-3a12.2 12.2 0 0 0 3.3-8.3a11.6 11.6 0 0 0-2.7-7.3a11.2 11.2 0 0 0-9-3.7c-3.5 0-6.2 1-8.2 3.1a11.3 11.3 0 0 0-2.9 8a10.9 10.9 0 0 0 3.1 8.2a11.3 11.3 0 0 0 8.3 3Z"></svg:path>`,
})
export class MeteoconsUvIndex9Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindIcon],svg[meteocons-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWind0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWind0" transform="translate(85 139)"></svg:use>`,
})
export class MeteoconsWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindAlertIcon],svg[meteocons-wind-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindAlert0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindAlert0" transform="translate(85 139)"></svg:use><svg:path fill="#ef4444" d="M430.9 339.6L411 303l-19.2-35.3a9 9 0 0 0-15.8 0l-19.2 35.4l-19.8 36.4a9 9 0 0 0 8 13.5h77.8a9 9 0 0 0 8-13.4Z"></svg:path>`,
})
export class MeteoconsWindAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort0Icon],svg[meteocons-wind-beaufort-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort00" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9m139.2 123.7A40 40 0 1 0 177 145H9"></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort00" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M406 334.2q-8.2 9.8-22 9.8t-21.8-9.8q-8.1-9.7-8.1-26.4q0-16.5 8-26.1q8-9.7 22-9.7q13.7 0 21.8 9.7t8 26.1q.1 16.6-8 26.4Zm-22-4.2q12.6 0 12.6-22T384 286t-12.6 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsWindBeaufort0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort1Icon],svg[meteocons-wind-beaufort-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort10" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1480"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 440"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort10" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M402.4 344h-19v-45h-17.8v-12.6h3q7.8 0 12.4-3.4q4.2-3.1 5.5-10.2l.2-.8h15.6Z"></svg:path>`,
})
export class MeteoconsWindBeaufort1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort10Icon],svg[meteocons-wind-beaufort-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort100" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4144"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2420"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort100" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M366.4 344h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Zm63.9-9.8q-8.2 9.8-21.9 9.8t-21.9-9.8q-8.1-9.7-8.1-26.4q0-16.5 8.1-26.1q8-9.7 21.9-9.7q13.7 0 21.9 9.7t8 26.1q0 16.6-8 26.4Zm-21.9-4.2q12.6 0 12.6-22t-12.6-22q-12.7 0-12.7 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsWindBeaufort10Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort11Icon],svg[meteocons-wind-beaufort-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort110" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4440"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2640"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort110" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M379 344h-18.9v-45h-17.8v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8H379Zm46.7 0h-19v-45H389v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Z"></svg:path>`,
})
export class MeteoconsWindBeaufort11Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort12Icon],svg[meteocons-wind-beaufort-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort120" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4736"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2860"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort120" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M367.5 344.4h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.5Zm69.7-.8h-55.7q0-9.4 4-15.7q4-6.1 14.9-13.5l10.9-7.7a22.2 22.2 0 0 0 5.8-5.5a10.2 10.2 0 0 0 1.8-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.4h-16.8v-2.1q0-12.2 7.1-19t20.2-6.8q12.4 0 19.7 6t7.4 16.6a22.2 22.2 0 0 1-3.5 12.3q-3.5 5.4-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.8h31Z"></svg:path>`,
})
export class MeteoconsWindBeaufort12Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort2Icon],svg[meteocons-wind-beaufort-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort20" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1776"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 660"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort20" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M411.9 344h-55.7q0-9.4 4-15.7q4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5a10.2 10.2 0 0 0 1.7-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"></svg:path>`,
})
export class MeteoconsWindBeaufort2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort3Icon],svg[meteocons-wind-beaufort-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort30" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2072"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 880"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort30" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M397.5 305.2a17.8 17.8 0 0 1 10.8 5.7a16.4 16.4 0 0 1 3.8 11.2a20 20 0 0 1-7.2 15.7q-7.3 6.2-20.3 6.2q-13.6 0-21-6.7t-7.8-18.6h16.5q.6 11.7 11.7 11.7a11.6 11.6 0 0 0 7.7-2.4a8.1 8.1 0 0 0 2.8-6.5a7.5 7.5 0 0 0-3-6.5a14 14 0 0 0-8.4-2.2h-4.9v-12h5.2c3 0 5.3-.6 7-2a7 7 0 0 0 2.4-5.7a7.2 7.2 0 0 0-2.4-5.8c-1.7-1.4-4-2-7-2s-5.2.7-6.8 2.1s-2.4 3.9-2.7 7.2H358q1-22.6 26-22.6q11.8 0 18.5 5.2a16.1 16.1 0 0 1 6.6 13.3a14.9 14.9 0 0 1-3 9.3a15.2 15.2 0 0 1-8.6 5.4Z"></svg:path>`,
})
export class MeteoconsWindBeaufort3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort4Icon],svg[meteocons-wind-beaufort-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort40" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2368"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1100"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort40" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M404.2 272v42.5l10.5-.3v14.3l-10.6-.3V344h-17.6v-15.8l-33.2.3V312l32.5-40.1Zm-36.6 42.5h19v-22.8h-.3Z"></svg:path>`,
})
export class MeteoconsWindBeaufort4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort5Icon],svg[meteocons-wind-beaufort-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort50" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2664"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1320"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort50" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M383.8 344q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6a12 12 0 0 0 7.2 2.2a11.6 11.6 0 0 0 8.5-3a10.5 10.5 0 0 0 3-8a10.4 10.4 0 0 0-3-7.8a11.6 11.6 0 0 0-8.5-3a12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5l6.4-38.6H408v14.7h-30.9l-2.3 12l.3.2q5.6-4 14.2-4q10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"></svg:path>`,
})
export class MeteoconsWindBeaufort5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort6Icon],svg[meteocons-wind-beaufort-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort60" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort60" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M388.5 294.8q11 0 17.7 6.5t6.8 17.3q0 11.3-7.7 18.4t-20.2 7q-12.6 0-20.6-7.7q-9.5-9-9.5-27.7q0-17.5 7.6-27t22.2-9.6q10.1 0 16.8 4.6a22.3 22.3 0 0 1 9 13l-16.6 1q-2.1-5.6-9.3-5.6q-6 0-9 4t-3.7 13q5.8-7.2 16.5-7.2Zm-12.7 31.6a11.5 11.5 0 0 0 8.8 3.7q5.4 0 8.3-3.2a11.9 11.9 0 0 0 2.9-8a10.6 10.6 0 0 0-3.2-8a11.2 11.2 0 0 0-8.2-3.1a11 11 0 0 0-8 3a12 12 0 0 0-3.4 8.2a12.3 12.3 0 0 0 2.8 7.4Z"></svg:path>`,
})
export class MeteoconsWindBeaufort6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort7Icon],svg[meteocons-wind-beaufort-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort70" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 3256"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1760"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort70" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M387.3 344h-20q0-13.7 6.5-29a88.4 88.4 0 0 1 17.9-26.7h-35.5V272h55.6v14.7q-12.3 13.1-18.2 26.8a81.8 81.8 0 0 0-6.3 30.5Z"></svg:path>`,
})
export class MeteoconsWindBeaufort7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort8Icon],svg[meteocons-wind-beaufort-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort80" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 3552"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1980"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort80" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M405.4 338.1q-7.9 5.9-21.4 5.9t-21.4-5.9a19 19 0 0 1-7.9-16a16.2 16.2 0 0 1 3.5-10.7a17.7 17.7 0 0 1 9.9-5.9v-.2a14.8 14.8 0 0 1-7.5-5.6a15.3 15.3 0 0 1-2.7-9a16 16 0 0 1 6.8-13.7q7-5 19.3-5t19.3 5a16 16 0 0 1 7 13.7a15.4 15.4 0 0 1-2.8 9.1a14.3 14.3 0 0 1-7.4 5.5v.3a18.1 18.1 0 0 1 9.8 5.9a16.2 16.2 0 0 1 3.5 10.6a19 19 0 0 1-8 16Zm-21.3-7q5.6 0 9-2.5a8.5 8.5 0 0 0 3.2-7.1a8.5 8.5 0 0 0-3.2-7.1c-2.2-1.7-5.2-2.5-9-2.5s-7 .8-9.2 2.5a8.5 8.5 0 0 0-3.2 7a8.4 8.4 0 0 0 3.3 7.2a15 15 0 0 0 9 2.5Zm0-30.3q5 0 7.8-2.3a7.4 7.4 0 0 0 2.9-6.1a7 7 0 0 0-2.8-6a13 13 0 0 0-8-2q-10.7 0-10.7 8a7.4 7.4 0 0 0 2.8 6.2q2.8 2.1 8 2.1Z"></svg:path>`,
})
export class MeteoconsWindBeaufort8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort9Icon],svg[meteocons-wind-beaufort-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort90" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 3848"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2200"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort90" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M403.4 279.7q9.7 9 9.7 27.6q0 17.5-7.7 27.1t-22.3 9.6q-10.1 0-16.8-4.6a21.9 21.9 0 0 1-9-12.8l16.6-1.1q2.1 5.5 9.3 5.5q5.9 0 9-4t3.8-13q-6 7.1-16.6 7.1q-10.9 0-17.6-6.4t-6.9-17.3q0-11.2 7.8-18.4t20-7q12.7 0 20.7 7.7Zm-20 28.5a11 11 0 0 0 8.2-3a12.2 12.2 0 0 0 3.3-8.3a11.6 11.6 0 0 0-2.7-7.3a11.2 11.2 0 0 0-9-3.7c-3.5 0-6.2 1-8.2 3.1a11.3 11.3 0 0 0-2.9 8a10.9 10.9 0 0 0 3.1 8.2a11.3 11.3 0 0 0 8.3 3Z"></svg:path>`,
})
export class MeteoconsWindBeaufort9Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindOffshoreIcon],svg[meteocons-wind-offshore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsWindOffshore0"><svg:path fill="none" d="M245.7 256.9H74.8v139.6h110.9l27.2-52.9l32.8-36.8v-49.9z"></svg:path></svg:clippath><svg:symbol id="meteoconsWindOffshore1" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="#744e2d" d="M353.4 158.3c-.8-5.8-2.9-10.2-4.6-10l-1.4.2c-1.7.3-2.6 5-1.8 10.9l14 113.5c.8 6 2.9 10.8 4.7 10.6l3.6-.5c1.8-.2 2.6-5.4 1.7-11.5Z"></svg:path><svg:path fill="#40c057" d="M403 153.2c-3.2-23.4-26-39.7-50.8-36.4a46 46 0 0 0-36.3 26.7h-2.2c-18.7 2.5-32 18.8-29.6 36.4a32.4 32.4 0 0 0 28.5 27.1a20.3 20.3 0 0 0-.7 8.7a22 22 0 0 0 25.3 18.3a23.4 23.4 0 0 0 14-7.3a34.7 34.7 0 0 0 28.3 8.8c18.6-2.5 31.9-18.7 29.5-36.3a30.8 30.8 0 0 0-11.4-20a41 41 0 0 0 5.3-26Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="3 366 200; -3 366 200; 3 366 200; -3 366 200; 3 366 200"></svg:animatetransform></svg:path><svg:g clip-path="url(#meteoconsWindOffshore0)"><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" d="M245.7 309.6c-13.8 0-26.3-14.7-32.8-27a2.9 2.9 0 0 0-5.2 0c-6.4 12.3-19 27-32.7 27s-26.4-14.7-32.9-27a2.9 2.9 0 0 0-5 0c-6.6 12.3-19 27-32.9 27h-10v62a20.4 20.4 0 0 0 20 20.6h131.5Z"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M245.68,309.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v62a20.38,20.38,0,0,0,20.16,20.59H245.68Z; M245.68,333.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v38a20.38,20.38,0,0,0,20.16,20.59H245.68Z; M245.68,309.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v62a20.38,20.38,0,0,0,20.16,20.59H245.68Z"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="#f8af18" stroke-miterlimit="10" stroke-width="9" d="M402.3 369.8v-66.4c0-12.3-8.9-22.4-19.8-22.4h-62.6c-49.2 0-94.2 31.4-116.4 81.1l-13.4 30h192.4c11 0 19.8-10 19.8-22.4Z"></svg:path><svg:use width="138" height="96" href="#meteoconsWindOffshore1" transform="matrix(-1 0 0 1 237 146)"></svg:use>`,
})
export class MeteoconsWindOffshoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindOnshoreIcon],svg[meteocons-wind-onshore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsWindOnshore0"><svg:path fill="none" d="M245.7 256.9H74.8v139.6h110.9l27.2-52.9l32.8-36.8v-49.9z"></svg:path></svg:clippath><svg:symbol id="meteoconsWindOnshore1" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="#744e2d" d="M378.5 160.6c.5-5.8-.4-10.5-2.2-10.6l-1.4-.2c-1.7-.2-3.6 4.2-4.3 10l-12.8 111.6c-.7 6 .2 11 2 11.3l3.6.3c1.9.2 3.8-4.5 4.4-10.5Z"></svg:path><svg:path fill="#40c057" d="M427.8 167.4a44.2 44.2 0 0 0-40.8-47.3a46 46 0 0 0-41.5 17.4l-2.2-.5c-18.7-2-35.4 10.7-37.2 28.4a32.4 32.4 0 0 0 21.3 33a20.2 20.2 0 0 0-2.8 8.4c-1.3 11.7 7.9 22.3 20.3 23.6a23.4 23.4 0 0 0 15.4-3.7a34.7 34.7 0 0 0 25.4 15.2c18.7 2 35.4-10.8 37.2-28.4a30.8 30.8 0 0 0-6.4-22a41 41 0 0 0 11.3-24.1Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="3 330 200; -3 330 200; 3 330 200; -3 330 200; 3 330 200"></svg:animatetransform></svg:path><svg:g clip-path="url(#meteoconsWindOnshore0)"><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" d="M245.7 309.6c-13.8 0-26.3-14.7-32.8-27a2.9 2.9 0 0 0-5.2 0c-6.4 12.3-19 27-32.7 27s-26.4-14.7-32.9-27a2.9 2.9 0 0 0-5 0c-6.6 12.3-19 27-32.9 27h-10v62a20.4 20.4 0 0 0 20 20.6h131.5Z"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M245.68,309.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v62a20.38,20.38,0,0,0,20.16,20.59H245.68Z; M245.68,333.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v38a20.38,20.38,0,0,0,20.16,20.59H245.68Z; M245.68,309.62c-13.79,0-26.33-14.73-32.8-27a2.88,2.88,0,0,0-5.13,0c-6.47,12.29-19,27-32.8,27s-26.33-14.73-32.81-27a2.87,2.87,0,0,0-5.12,0c-6.48,12.29-19,27-32.81,27H94.11v62a20.38,20.38,0,0,0,20.16,20.59H245.68Z"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="#f8af18" stroke-miterlimit="10" stroke-width="9" d="M402.3 369.8v-66.4c0-12.3-8.9-22.4-19.8-22.4h-62.6a120 120 0 0 0-74.2 26.3a143.7 143.7 0 0 0-42.2 54.8l-13.4 30h192.4c11 0 19.8-10 19.8-22.4Z"></svg:path><svg:use width="138" height="96" href="#meteoconsWindOnshore1" transform="translate(99 146)"></svg:use>`,
})
export class MeteoconsWindOnshoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindSnowIcon],svg[meteocons-wind-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindSnow0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindSnow0" transform="translate(85 139)"></svg:use><svg:path fill="#86c3db" d="m249.6 180.7l-5.8-3.4a14.3 14.3 0 0 0 0-6.6l5.8-3.4a4.1 4.1 0 0 0 1.4-5.5a4 4 0 0 0-5.5-1.5l-5.8 3.3a14.2 14.2 0 0 0-2.6-2a14.6 14.6 0 0 0-3-1.3v-6.7a4 4 0 1 0-8.1 0v6.7a14.2 14.2 0 0 0-5.7 3.3l-5.8-3.3a4 4 0 0 0-5.5 1.5a4.1 4.1 0 0 0 1.5 5.5l5.8 3.4a14.3 14.3 0 0 0 0 6.6l-5.8 3.4a4.1 4.1 0 0 0-1.5 5.5a4 4 0 0 0 5.5 1.5l5.8-3.3a14.2 14.2 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.3v6.7a4 4 0 1 0 8.1 0v-6.7a14.1 14.1 0 0 0 5.7-3.3l5.8 3.3a4 4 0 0 0 5.5-1.5a4.1 4.1 0 0 0-1.4-5.5Zm-22.6-1.4a6.2 6.2 0 0 1-2.2-8.4a6 6 0 0 1 5.2-3a6 6 0 0 1 3 .8a6.2 6.2 0 0 1 2.3 8.4a6 6 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform id="meteoconsWindSnow1" additive="sum" attributeName="transform" begin=".5s; x1.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"></svg:animatetransform><svg:animate attributeName="opacity" begin=".5s; x1.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="m393.6 282.7l-5.8-3.4a14.3 14.3 0 0 0 0-6.6l5.8-3.4a4.1 4.1 0 0 0 1.4-5.5a4 4 0 0 0-5.5-1.5l-5.8 3.3a14.2 14.2 0 0 0-2.6-2a14.6 14.6 0 0 0-3-1.3v-6.7a4 4 0 1 0-8.1 0v6.7a14.2 14.2 0 0 0-5.7 3.3l-5.8-3.3a4 4 0 0 0-5.5 1.5a4.1 4.1 0 0 0 1.5 5.5l5.8 3.4a14.3 14.3 0 0 0 0 6.6l-5.8 3.4a4.1 4.1 0 0 0-1.5 5.5a4 4 0 0 0 5.5 1.5l5.8-3.3a14.2 14.2 0 0 0 2.7 2a13.8 13.8 0 0 0 3 1.3v6.7a4 4 0 1 0 8 0v-6.7a14.1 14.1 0 0 0 5.7-3.3l5.8 3.3a4 4 0 0 0 5.5-1.5a4.1 4.1 0 0 0-1.4-5.5Zm-22.6-1.4a6.2 6.2 0 0 1-2.2-8.4a6 6 0 0 1 5.2-3a6 6 0 0 1 3 .8a6.2 6.2 0 0 1 2.3 8.4a6 6 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform id="meteoconsWindSnow2" additive="sum" attributeName="transform" begin="1s; x2.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"></svg:animatetransform><svg:animate attributeName="opacity" begin="1s; x2.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="m163.6 340.7l-5.8-3.4a14.3 14.3 0 0 0 0-6.6l5.8-3.4a4.1 4.1 0 0 0 1.4-5.5a4 4 0 0 0-5.5-1.5l-5.8 3.3a14.2 14.2 0 0 0-2.6-2a14.6 14.6 0 0 0-3-1.3v-6.7a4 4 0 1 0-8.1 0v6.7a14.2 14.2 0 0 0-5.7 3.3l-5.8-3.3a4 4 0 0 0-5.5 1.5a4.1 4.1 0 0 0 1.5 5.5l5.8 3.4a14.3 14.3 0 0 0 0 6.6l-5.8 3.4a4.1 4.1 0 0 0-1.5 5.5a4 4 0 0 0 5.5 1.5l5.8-3.3a14.2 14.2 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.3v6.7a4 4 0 1 0 8.1 0v-6.7a14.1 14.1 0 0 0 5.7-3.3l5.8 3.3a4 4 0 0 0 5.5-1.5a4.1 4.1 0 0 0-1.4-5.5Zm-22.6-1.4a6.2 6.2 0 0 1-2.2-8.4a6 6 0 0 1 5.2-3a6 6 0 0 1 3 .8a6.2 6.2 0 0 1 2.3 8.4a6 6 0 0 1-8.3 2.2Z" opacity="0"><svg:animatetransform id="meteoconsWindSnow3" additive="sum" attributeName="transform" begin="0s; x3.end+1.33s" dur="1.67s" type="translate" values="-30 0; 30 0"></svg:animatetransform><svg:animate attributeName="opacity" begin="0s; x3.end+1.33s" dur="1.67s" keyTimes="0; .2; .8; 1" values="0; 1; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsWindSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindsockIcon],svg[meteocons-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:path fill="#ef4444" d="m191.4 137l28.8 4.3a6.4 6.4 0 0 1 5.4 6.3v73.7a6.4 6.4 0 0 1-5.4 6.3l-28.8 4.2a6.4 6.4 0 0 1-7.3-6.4v-82a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform></svg:path><svg:path fill="#ef4444" d="m260.6 146.1l28.8 4.2a6.4 6.4 0 0 1 5.4 6.3v55.6a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-64a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 5 0; 0 0"></svg:animatetransform></svg:path><svg:path fill="#ef4444" d="m329.8 155.2l28.7 4.2a6.4 6.4 0 0 1 5.5 6.3v37.4a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-45.8a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 10 0; 0 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsWindsockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindsockWeakIcon],svg[meteocons-windsock-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:path fill="#ef4444" d="m239.7 154.7l-22.8-18a6.4 6.4 0 0 0-9.5 1.8l-41 71a6.4 6.4 0 0 0 3.2 9.2l27 10.7a6.4 6.4 0 0 0 7.9-2.7l36.8-63.8a6.4 6.4 0 0 0-1.6-8.2Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="0 204 183; -3 204 183; 0 204 183"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 1 -2; 0 0"></svg:animatetransform></svg:path><svg:path fill="#ef4444" d="m285.2 210.6l-17.4-23.3a6.4 6.4 0 0 0-9.6-.7L213 231.8a6.4 6.4 0 0 0 .7 9.7l23.3 17.3a6.4 6.4 0 0 0 8.3-.6l39.3-39.2a6.4 6.4 0 0 0 .6-8.4Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="0 249 222; -6 249 222; 0 249 222"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 5 -7; 0 0"></svg:animatetransform></svg:path><svg:path fill="#ef4444" d="m310.5 271.2l-10.7-27a6.4 6.4 0 0 0-9.1-3.2L251 263.9a6.4 6.4 0 0 0-1.9 9.5l18 22.8a6.4 6.4 0 0 0 8.2 1.5l32.4-18.7a6.4 6.4 0 0 0 2.7-7.8Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="0 279 269; -9 279 269; 0 279 269"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 17 -12; 0 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsWindsockWeakIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCodeGreenIcon],svg[meteocons-code-green-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#40c057" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9Z"></svg:path><svg:path fill="#40c057" d="M243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6m29 107.6q0 7-3 9.5c-2 1.8-5.6 2.7-11 2.7h-4c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"></svg:path>`,
})
export class MeteoconsCodeGreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteoconsCodeOrangeIcon],svg[meteocons-code-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ffa94d" stroke-miterlimit="10" stroke-width="15" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9Z"></svg:path><svg:path fill="#ffa94d" d="M243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6m29 107.6q0 7-3 9.5c-2 1.8-5.6 2.7-11 2.7h-4c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"></svg:path>`,
})
export class MeteoconsCodeOrangeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
