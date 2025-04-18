import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScrewdriverIcon],svg[icon-park-outline-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 24h10v5c.961.976 2.039 2.524 3 3.5V44H16V32.5l3-3.5z"></svg:path><svg:path stroke-linecap="round" d="M21 13v11h6V13l2-3l-2-6h-6l-2 6z"></svg:path></svg:g>`,
})
export class IconParkOutlineScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
