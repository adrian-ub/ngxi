import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoFaceWithRollingEyesIcon],svg[noto-face-with-rolling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:radialgradient id="notoFaceWithRollingEyes0" cx="63.6" cy="1104.9" r="56.96" gradientTransform="translate(0 -1042)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#FDE030"></svg:stop><svg:stop offset=".92" stop-color="#F7C02B"></svg:stop><svg:stop offset="1" stop-color="#F4A223"></svg:stop></svg:radialgradient><svg:path fill="url(#notoFaceWithRollingEyes0)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></svg:path><svg:path fill="#FFF" d="M49.52 41c-.34-.19-.67-.38-1-.54c-8.35-4.15-18.48-.75-22.63 7.6s-.75 18.48 7.6 22.63s18.48.75 22.63-7.6c3.95-7.95 1.07-17.61-6.6-22.09"></svg:path><svg:defs><svg:path id="notoFaceWithRollingEyes1" d="M49.52 41c-.34-.19-.67-.38-1-.54c-8.35-4.15-18.48-.75-22.63 7.6s-.75 18.48 7.6 22.63s18.48.75 22.63-7.6c3.95-7.95 1.07-17.61-6.6-22.09"></svg:path></svg:defs><svg:clippath id="notoFaceWithRollingEyes2"><svg:use href="#notoFaceWithRollingEyes1"></svg:use></svg:clippath><svg:g clip-path="url(#notoFaceWithRollingEyes2)"><svg:circle cx="41.75" cy="43.52" r="7.31" fill="#422B0D"></svg:circle></svg:g><svg:path fill="#FFF" d="M94.16 41c-.34-.19-.68-.38-1-.54c-8.32-4.14-18.41-.74-22.55 7.57c-4.14 8.32-.74 18.41 7.57 22.55c8.32 4.14 18.41.74 22.55-7.57c3.94-7.92 1.07-17.54-6.57-22.01"></svg:path><svg:defs><svg:path id="notoFaceWithRollingEyes3" d="M94.16 41c-.34-.19-.68-.38-1-.54c-8.32-4.14-18.41-.74-22.55 7.57c-4.14 8.32-.74 18.41 7.57 22.55c8.32 4.14 18.41.74 22.55-7.57c3.94-7.92 1.07-17.54-6.57-22.01"></svg:path></svg:defs><svg:clippath id="notoFaceWithRollingEyes4"><svg:use href="#notoFaceWithRollingEyes3"></svg:use></svg:clippath><svg:g clip-path="url(#notoFaceWithRollingEyes4)"><svg:circle cx="86.38" cy="43.52" r="7.31" fill="#422B0D"></svg:circle></svg:g><svg:path fill="#F4A223" d="M69.71 55.84a18 18 0 0 0 5.74 10.72c1.47 1.29 3.17 2.31 5 3c1.82.69 3.75 1.03 5.69 1c3.95 0 7.77-1.45 10.72-4.07c3.1-2.8 5.13-6.59 5.74-10.72h.2c0 9.2-7.46 16.66-16.66 16.66s-16.66-7.46-16.66-16.66v-.01zm-44.58 0a18 18 0 0 0 5.74 10.72c1.47 1.29 3.17 2.31 5 3c1.82.69 3.75 1.03 5.69 1c3.95 0 7.76-1.45 10.72-4.07c3.1-2.8 5.13-6.59 5.74-10.72h.2c0 9.2-7.46 16.66-16.66 16.66S24.9 64.98 24.9 55.78v-.01z"></svg:path><svg:path fill="#EB8F00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23"></svg:path><svg:path fill="#422B0D" d="M75 98H53c-2.21 0-4-1.79-4-4s1.79-4 4-4h22c2.21 0 4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class NotoFaceWithRollingEyesIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
