import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandEdgeIcon],svg[tabler-brand-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.978 11.372a9 9 0 1 0-1.593 5.773"></svg:path><svg:path d="M20.978 11.372c.21 2.993-5.034 2.413-6.913 1.486c1.392-1.6.402-4.038-2.274-3.851c-1.745.122-2.927 1.157-2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79"></svg:path><svg:path d="M3.022 12.628C2.739 8.585 11.739 5.4 14.27 9.94m-1.642 11.038c-2.993.21-5.162-4.725-3.567-9.748"></svg:path></svg:g>`,
})
export class TablerBrandEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
