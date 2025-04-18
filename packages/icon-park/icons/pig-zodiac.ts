import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPigZodiacIcon],svg[icon-park-pig-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13.0001 27C15.0727 26.4583 19.0142 23.8333 20.0001 23V16L14.0001 14C13.5893 12.3796 12.3146 9.11111 11.0001 8L9.55188 12.5139C6.9502 13.6713 2.69965 18.8889 5.00008 25C6.00008 27 8.077 34 11.0001 39"></svg:path><svg:path stroke-linejoin="round" d="M24 13.2055C28.3911 12.479 37.5246 13.2781 38.9297 22.2864C39.2225 23.6184 38.7541 30.0088 34.5386 32.9147C33.6895 33.5 33 36 33 39"></svg:path><svg:path d="M26 40C26 37.7909 24.2091 36 22 36C19.7909 36 18 37.7909 18 40"></svg:path><svg:path stroke-linejoin="round" d="M39 24C39.5 25 41.6985 25.6695 43.2277 24.1017C44.1179 23.189 44.8467 20.3339 42.598 19"></svg:path></svg:g>`,
})
export class IconParkPigZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
