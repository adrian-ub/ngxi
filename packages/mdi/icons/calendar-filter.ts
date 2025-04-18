import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarFilterIcon],svg[mdi-calendar-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6h-2V8H5v11h10v2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1zm11 20l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18z"></svg:path>`,
})
export class MdiCalendarFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
