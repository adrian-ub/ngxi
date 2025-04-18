import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterKeyIcon],svg[icon-park-enter-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 44V4H24V20H4V44H44Z"></svg:path><svg:path stroke="#fff" d="M21 28L17 32L21 36"></svg:path><svg:path stroke="#fff" d="M34 23V32H17"></svg:path></svg:g>`,
})
export class IconParkEnterKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
