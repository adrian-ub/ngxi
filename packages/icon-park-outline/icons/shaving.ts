import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShavingIcon],svg[icon-park-outline-shaving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="27" x="14" y="17" rx="2"></svg:rect><svg:path d="M19 12h10v5H19zm0 0V9c0-1 0-5 8-5h9v5h-7v3"></svg:path></svg:g>`,
})
export class IconParkOutlineShavingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
