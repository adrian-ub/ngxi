import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingWarehouseIcon],svg[tabler-building-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21V8l9-4l9 4v13"></svg:path><svg:path d="M13 13h4v8H7v-6h6"></svg:path><svg:path d="M13 21v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></svg:path></svg:g>`,
})
export class TablerBuildingWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
