import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFmiweatherIcon],svg[arcticons-fmiweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.581 44.474a23.508 23.508 0 0 1 0-40.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.182 41.719a18.977 18.977 0 0 1 0-35.437"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.31 38.01a14.442 14.442 0 0 1 0-28.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.146 33.792a9.908 9.908 0 0 1 0-19.584"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.833 29.334a5.376 5.376 0 0 1 0-10.668M17.419 3.526a23.508 23.508 0 0 1 0 40.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.818 6.282a18.977 18.977 0 0 1 0 35.436"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.69 9.99a14.442 14.442 0 0 1 0 28.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.854 14.208a9.908 9.908 0 0 1 0 19.584"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.167 18.666a5.376 5.376 0 0 1 0 10.668M2.5 24h43"></svg:path>`,
})
export class ArcticonsFmiweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
