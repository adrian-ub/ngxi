import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGoogleBigQueryIcon],svg[tabler-brand-google-big-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.73 19.875A2.23 2.23 0 0 1 15.782 21H8.499a2.22 2.22 0 0 1-1.947-1.158l-4.272-6.75a2.27 2.27 0 0 1 0-2.184l4.272-6.75A2.23 2.23 0 0 1 8.498 3h7.285c.809 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75z"></svg:path><svg:path d="M8 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l2 2"></svg:path></svg:g>`,
})
export class TablerBrandGoogleBigQueryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
