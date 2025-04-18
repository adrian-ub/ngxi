import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNailPolishOneIcon],svg[icon-park-nail-polish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="14" height="16" x="17" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 32H26L27 37H21L22 32Z"></svg:path><svg:path stroke="#fff" d="M24 20V32"></svg:path><svg:path stroke="#000" d="M31 20H17"></svg:path></svg:g>`,
})
export class IconParkNailPolishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
