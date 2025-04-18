import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMonumentTwoIcon],svg[icon-park-monument-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M18 44L20 7.15789L28 4L30 44H18Z"></svg:path></svg:g>`,
})
export class IconParkMonumentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
