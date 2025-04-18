import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMonumentOneIcon],svg[icon-park-monument-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="6" x="14" y="38"></svg:rect><svg:path fill="#2F88FF" d="M18 38L20 9L24 4L28 9L30 38H18Z"></svg:path><svg:path stroke-linecap="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkMonumentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
