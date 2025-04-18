import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCannedFoodIcon],svg[twemoji-canned-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M30 32.5c0 1.933-5.373 3.5-12 3.5S6 34.433 6 32.5c0-1.932 5.372-3.5 12-3.5c6.627 0 12 1.567 12 3.5"></svg:path><svg:path fill="#99AAB5" d="M6 31.5h24v1H6z"></svg:path><svg:path fill="#E6E7E8" d="M30 31.5c0 1.933-5.373 3.5-12 3.5S6 33.433 6 31.5S11.372 28 18 28c6.627 0 12 1.567 12 3.5"></svg:path><svg:path fill="#5C913B" d="M29 31c0 1.656-4.926 3-11 3c-6.075 0-11-1.343-11-3s4.924-3 11-3s11 1.343 11 3"></svg:path><svg:path fill="#5C913B" d="M7 8h22v23H7z"></svg:path><svg:path fill="#A6D388" d="M29 23c0 1.932-4.926 3.5-11 3.5c-6.075 0-11-1.567-11-3.5s4.924-3.5 11-3.5c6.074 0 11 1.567 11 3.5"></svg:path><svg:path fill="#A6D388" d="M7 10h22v13H7z"></svg:path><svg:path fill="#5C913B" d="M29 14c0 1.932-4.926 3.5-11 3.5c-6.075 0-10.999-1.567-10.999-3.5S11.925 10.5 18 10.5c6.074 0 11 1.567 11 3.5"></svg:path><svg:path fill="#5C913B" d="M7 4h22v10H7z"></svg:path><svg:path fill="#99AAB5" d="M30 4.5C30 6.433 24.627 8 18 8S6 6.433 6 4.5S11.373 1 18 1s12 1.567 12 3.5"></svg:path><svg:path fill="#99AAB5" d="M6 3.5h24v1H6z"></svg:path><svg:path fill="#E6E7E8" d="M30 3.5C30 5.433 24.627 7 18 7S6 5.433 6 3.5S11.373 0 18 0s12 1.567 12 3.5"></svg:path><svg:path fill="#CCD6DD" d="M28.25 3.5C28.25 4.881 23.662 6 18 6S7.75 4.881 7.75 3.5S12.338 1 18 1s10.25 1.119 10.25 2.5"></svg:path><svg:path fill="#E6E7E8" d="M27.25 3.5c0 1.105-4.14 2-9.25 2s-9.25-.895-9.25-2s4.141-2 9.25-2c5.11 0 9.25.895 9.25 2"></svg:path><svg:path fill="#CCD6DD" d="M24 3.5c0 .69-2.686 1.25-6 1.25s-6-.56-6-1.25s2.686-1.25 6-1.25s6 .56 6 1.25"></svg:path><svg:ellipse cx="18" cy="3.5" fill="#E6E7E8" rx="4.75" ry=".75"></svg:ellipse><svg:path fill="#FFCC4D" d="M25 21c0 4.142-3.134 7.5-7 7.5s-7-3.358-7-7.5s3.134-7.5 7-7.5s7 3.358 7 7.5"></svg:path><svg:path fill="#FFAC33" d="M23 21c0 3.156-2.239 5.715-5 5.715s-5-2.56-5-5.715s2.238-5.714 5-5.714s5 2.558 5 5.714"></svg:path>`,
})
export class TwemojiCannedFoodIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
