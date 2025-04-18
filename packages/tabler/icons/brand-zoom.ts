import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandZoomIcon],svg[tabler-brand-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.011 9.385v5.128L21 18V6zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196a.99.99 0 0 1-.975 1H5.652c-1.667 0-2.652-1.5-2.652-3l.01-8a.88.88 0 0 1 .208-.71a.84.84 0 0 1 .67-.287z"></svg:path>`,
})
export class TablerBrandZoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
