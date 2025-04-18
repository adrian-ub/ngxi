import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarExportBrokenIcon],svg[solar-export-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
