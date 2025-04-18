import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChildrenCapIcon],svg[icon-park-solid-children-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 32c0-15 5-24 8-24s6 6 6 6h8s3-6 6-6s8 9 8 24"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkSolidChildrenCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
