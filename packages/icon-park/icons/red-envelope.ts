import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRedEnvelopeIcon],svg[icon-park-red-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M39 4H9V10L24 14L39 10V4Z"></svg:path><svg:path d="M39 17V44H9V17"></svg:path><svg:path d="M19 19L24 25L29 19"></svg:path><svg:path d="M18 31H30"></svg:path><svg:path d="M18 25H30"></svg:path><svg:path d="M24 25V37"></svg:path></svg:g>`,
})
export class IconParkRedEnvelopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
