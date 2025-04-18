import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDocDetailIcon],svg[icon-park-doc-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 4H11C9.89543 4 9 4.89543 9 6V42C9 43.1046 9.89543 44 11 44H39C40.1046 44 41 43.1046 41 42V6C41 4.89543 40.1046 4 39 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:rect width="14" height="10" x="17" y="12" fill="#2F88FF" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkDocDetailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
