import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationVerticalIcon],svg[icon-park-rotation-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 28L34 24L30 28"></svg:path><svg:path d="M33.1679 16C31.6248 8.93638 28.1006 4 24 4C18.4772 4 14 12.9543 14 24C14 35.0457 18.4772 44 24 44C29.5228 44 34 35.0457 34 24"></svg:path></svg:g>`,
})
export class IconParkRotationVerticalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
