import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWalmartIcon],svg[tabler-brand-walmart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.04V3m3.5 7L20 7.5M15.5 14l4.5 2.5m-8-.54V21m-3.5-7L4 16.5M8.5 10L4 7.495"></svg:path>`,
})
export class TablerBrandWalmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
