import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoMovieCameraIcon],svg[noto-movie-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#595858" d="M32 80L20 64h-8c-4.42 0-8 3.58-8 8v44c0 4.42 3.58 8 8 8h8l12-16h20V80z"></svg:path><svg:path fill="#3A3A3A" d="M16 64h3v60h-3z"></svg:path><svg:path fill="#595858" d="M121.11 73.45L116 76h-16v12h16l5.11 2.55c1.33.66 2.89-.3 2.89-1.79V75.24c0-1.49-1.56-2.46-2.89-1.79"></svg:path><svg:path fill="#3F3F3F" d="M64 48h28v28H64z"></svg:path><svg:path fill="#787676" d="M31.5 80h3v28h-3z" opacity=".5"></svg:path><svg:path fill="#3A3A3A" d="M40.75 80h3v28h-3z"></svg:path><svg:circle cx="48" cy="36" r="32" fill="#504F4F"></svg:circle><svg:circle cx="101" cy="46" r="22" fill="#504F4F"></svg:circle><svg:path fill="#504F4F" d="M104 120H52c-4.42 0-8-3.58-8-8V76c0-4.42 3.58-8 8-8h52c4.42 0 8 3.58 8 8v36c0 4.42-3.58 8-8 8"></svg:path><svg:path fill="#3A3A3A" d="M54 94c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path><svg:path fill="#504F4F" d="M64 107c-1.65 0-3-1.35-3-3v-8c0-1.65 1.35-3 3-3h32c1.65 0 3 1.35 3 3v8c0 1.65-1.35 3-3 3z"></svg:path><svg:path fill="#3A3A3A" d="M96 94.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H64c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5zm0-3H64c-2.48 0-4.5 2.02-4.5 4.5v8c0 2.48 2.02 4.5 4.5 4.5h32c2.48 0 4.5-2.02 4.5-4.5v-8c0-2.48-2.02-4.5-4.5-4.5"></svg:path><svg:circle cx="48" cy="36" r="22.5" fill="#504F4F"></svg:circle><svg:path fill="#3A3A3A" d="M48 15c11.58 0 21 9.42 21 21s-9.42 21-21 21s-21-9.42-21-21s9.42-21 21-21m0-3c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24s-10.75-24-24-24"></svg:path><svg:circle cx="101" cy="46" r="12.5" fill="#504F4F"></svg:circle><svg:path fill="#3A3A3A" d="M101 35c6.07 0 11 4.93 11 11s-4.93 11-11 11s-11-4.93-11-11s4.93-11 11-11m0-3c-7.73 0-14 6.27-14 14s6.27 14 14 14s14-6.27 14-14s-6.27-14-14-14"></svg:path><svg:circle cx="48" cy="36" r="8" fill="#636262"></svg:circle><svg:circle cx="101" cy="46" r="8" fill="#636262"></svg:circle><svg:lineargradient id="notoMovieCamera0" x1="54" x2="54" y1="34.14" y2="30.122" gradientTransform="matrix(1 0 0 -1 0 127.89)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#FF1744"></svg:stop><svg:stop offset="1" stop-color="#D50000"></svg:stop></svg:lineargradient><svg:circle cx="54" cy="96" r="2" fill="url(#notoMovieCamera0)"></svg:circle><svg:lineargradient id="notoMovieCamera1" x1="54" x2="54" y1="26.14" y2="22.12" gradientTransform="matrix(1 0 0 -1 0 127.89)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#76FF03"></svg:stop><svg:stop offset="1" stop-color="#64DD17"></svg:stop></svg:lineargradient><svg:circle cx="54" cy="104" r="2" fill="url(#notoMovieCamera1)"></svg:circle>`,
})
export class NotoMovieCameraIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
