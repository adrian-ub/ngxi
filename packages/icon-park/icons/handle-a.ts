import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleAIcon],svg[icon-park-handle-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M24 11L14 33"></svg:path><svg:path stroke="#fff" d="M18 26L30 26"></svg:path><svg:path stroke="#fff" d="M24 11L34 33"></svg:path></svg:g>`,
})
export class IconParkHandleAIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
