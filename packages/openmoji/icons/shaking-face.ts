import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShakingFaceIcon],svg[openmoji-shaking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="22" fill="#fcea2b"></svg:circle><svg:ellipse cx="36" cy="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="22.087" ry="22"></svg:ellipse><svg:circle cx="42" cy="45" r="3"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 30.5S5 55 30 63M6 44s2 11 12.017 16.958M62.449 43.47s5.405-24.317-19.282-33.238m23.28 18.839s-1.59-11.066-11.38-17.392"></svg:path><svg:ellipse cx="26.485" cy="36.052" rx="2.308" ry="4.155" transform="rotate(-31.607 26.484 36.052)"></svg:ellipse><svg:ellipse cx="37.769" cy="27.323" rx="2.308" ry="4.155" transform="rotate(-39.583 37.77 27.323)"></svg:ellipse><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40.514 21.662s2.977 1.188 3.711 4.667m-23.542 9.914s.176 3.2 3.238 5.007"></svg:path>`,
})
export class OpenmojiShakingFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
