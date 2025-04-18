import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeightliftingIcon],svg[icon-park-weightlifting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 27C26.7614 27 29 24.7614 29 22C29 19.2386 26.7614 17 24 17C21.2386 17 19 19.2386 19 22C19 24.7614 21.2386 27 24 27Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4V14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 4V14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 9V26.1L24 34L37 26V9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 34V44"></svg:path></svg:g>`,
})
export class IconParkWeightliftingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
