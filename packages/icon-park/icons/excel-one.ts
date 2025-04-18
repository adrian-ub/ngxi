import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExcelOneIcon],svg[icon-park-excel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M30 16H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 32L18 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 24H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 32H18"></svg:path></svg:g>`,
})
export class IconParkExcelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
