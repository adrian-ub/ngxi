import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChopsticksForkIcon],svg[icon-park-chopsticks-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V44"></svg:path><svg:path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path d="M37 4L40 44"></svg:path><svg:path d="M31 4L28 44"></svg:path></svg:g>`,
})
export class IconParkChopsticksForkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
