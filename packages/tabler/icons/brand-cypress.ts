import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCypressIcon],svg[tabler-brand-cypress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.48 17.007A9 9 0 1 0 12 21a2.08 2.08 0 0 0 1.974-1.423L17.5 9m-4 0l2 6"></svg:path><svg:path d="M10.764 9.411a3 3 0 1 0-.023 5.19"></svg:path></svg:g>`,
})
export class TablerBrandCypressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
