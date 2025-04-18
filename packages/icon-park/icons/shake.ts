import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShakeIcon],svg[icon-park-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M4 10L8 14.6667L4 19.3333L8 24L4 28.6667L8 33.3333L4 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 10L40 14.6667L44 19.3333L40 24L44 28.6667L40 33.3333L44 38"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 6H14V42H34V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 35H26"></svg:path></svg:g>`,
})
export class IconParkShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
