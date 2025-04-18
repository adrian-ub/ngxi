import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRotateIcon],svg[icon-park-outline-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 24h30v18H12z"></svg:path><svg:path stroke-linecap="round" d="M6 8v9h9"></svg:path><svg:path stroke-linecap="round" d="M38.475 13.299C35.195 8.87 29.933 6 24 6c-5.821 0-10.997 2.763-14.287 7.05L6 17"></svg:path></svg:g>`,
})
export class IconParkOutlineRotateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
