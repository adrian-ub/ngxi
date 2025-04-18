import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandLoomIcon],svg[tabler-brand-loom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.464 6.518a6 6 0 1 0-3.023 7.965"></svg:path><svg:path d="M17.482 17.464a6 6 0 1 0-7.965-3.023"></svg:path><svg:path d="M6.54 17.482a6 6 0 1 0 3.024-7.965"></svg:path><svg:path d="M6.518 6.54a6 6 0 1 0 7.965 3.024"></svg:path></svg:g>`,
})
export class TablerBrandLoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
