import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCoreosIcon],svg[tabler-brand-coreos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 3c-3.263 3.212-3 7.654-3 12c4.59.244 8.814-.282 12-3"></svg:path><svg:path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5"></svg:path></svg:g>`,
})
export class TablerBrandCoreosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
