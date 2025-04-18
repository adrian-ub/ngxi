import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLocalPinIcon],svg[icon-park-local-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z"></svg:path><svg:path stroke-linecap="round" d="M24 20V38"></svg:path><svg:path stroke-linecap="round" d="M16 32H12L4 44H44L36 32H32"></svg:path></svg:g>`,
})
export class IconParkLocalPinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
