import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHardDiskIcon],svg[icon-park-outline-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 29H4v13h40z"></svg:path><svg:path fill="currentColor" d="M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M4 29L9.038 4.999H39.02l4.98 24"></svg:path></svg:g>`,
})
export class IconParkOutlineHardDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
