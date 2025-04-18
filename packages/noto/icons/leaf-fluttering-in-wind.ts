import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoLeafFlutteringInWindIcon],svg[noto-leaf-fluttering-in-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8BC12D" d="M100.7 71.48c-1.71-.43-4.23 4.62-13.38 4.33s-26.94-6.45-40.22 4.91c-12.71 10.87-6.06 23.96-8.76 25.12c-2.69 1.15-6.25 0-7.6-.96s-4.04-2.6-4.52-2.6s-3.37 1.92-3.18 4.62c.19 2.69 2.12 3.66 2.69 3.85c.58.19 4.23-1.25 7.89-.48s5.68 1.83 6.35 2.5s9.33 11.55 23.67 11.07s27.04-8.76 33.58-25.02c6.04-14.99 5.02-26.96 3.48-27.34"></svg:path><svg:path fill="#599724" d="M76.47 90.21c-6.4 2.06-13.9 3.1-19.22 5.94c-5.3 2.83-11.71 8.05-8.96 10.66c2.77 2.63 7.28-5.37 17.23-8.55c9.96-3.18 14.06-4.73 17.59-7.06s6.99-7.2 6-7.77c-1.12-.65-4.3 4.09-12.64 6.78"></svg:path><svg:path fill="#B1E4FE" d="M91.54 40.46c-.06-.03-1.29-1.2-3.54-2.46c-2.7-1.52-6.42-2.95-11.34-3.84c-6.81-1.23-15.6-1.53-23.52 5.33c-7.93 6.86-7.61 17.12-3.94 23.6c2.59 4.57 7.42 9.45 6.64 10.15c-1.15 1.04-7.16-1.52-11.51-6.99c-4.43-5.56-9.55-18.79.82-30.41c8.9-9.98 23.02-10.32 31.41-8.88c12.53 2.15 19.66 8.8 19.66 8.8s-4.66 4.71-4.68 4.7"></svg:path><svg:radialgradient id="notoLeafFlutteringInWind0" cx="33.437" cy="27.652" r="60.812" gradientUnits="userSpaceOnUse"><svg:stop offset=".367" stop-color="#D9F3FB"></svg:stop><svg:stop offset=".558" stop-color="#D4F1FB"></svg:stop><svg:stop offset=".781" stop-color="#C6ECFC"></svg:stop><svg:stop offset="1" stop-color="#B1E4FE"></svg:stop></svg:radialgradient><svg:path fill="url(#notoLeafFlutteringInWind0)" d="M95.4 35.04c5.91 3.79 10.7 10.26 8.81 17.76c-2.65 10.54-27.17 6.72-33.65 5s-34.12-8.82-34.51-31.62c-.4-22.8 32.59-24 32.08-21.71c-.47 2.11-18.2 2.73-20.77 14.06s7.5 17.41 14.76 21.55s21.39 6.95 26.94 7.11c3.12.09 4.88-.74 5.06-2.2c.14-1.14-.33-2.41-2.62-4.56z"></svg:path><svg:path fill="#B1E4FE" d="m91.54 38.62l-4.29-8.39s2.46.92 6.73 3.6c1.96 1.23 3.73 2.87 3.73 2.87z"></svg:path>`,
})
export class NotoLeafFlutteringInWindIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
