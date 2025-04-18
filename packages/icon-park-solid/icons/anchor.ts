import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAnchorIcon],svg[icon-park-solid-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M14 8h20M14 8h20M14 40h20"></svg:path><svg:rect width="8" height="8" x="36" y="4" fill="currentColor" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="4" fill="currentColor" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="36" y="36" fill="currentColor" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="36" fill="currentColor" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M40 14v20M8 14v20"></svg:path></svg:g>`,
})
export class IconParkSolidAnchorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
