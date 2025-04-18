import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLandingIcon],svg[icon-park-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 43L43 43"></svg:path><svg:path fill="#2F88FF" d="M4 25V14.9901C5.21558 14.9901 8.81818 19.1686 10 21L21 23V5L25 7L30.8312 25.9783L40 28C44 29 44 31.5004 44 31.9998C44 35 40.5 35 40 35C36 35 4 25 4 25Z"></svg:path></svg:g>`,
})
export class IconParkLandingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
