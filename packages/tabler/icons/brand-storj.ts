import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandStorjIcon],svg[tabler-brand-storj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m16 10a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-10a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-8-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m12 21l-8-4V7l8-4l8 4v10z"></svg:path><svg:path d="M9.1 15a2.1 2.1 0 0 1-.648-4.098C8.734 9.254 9.771 8 11.5 8c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19L14.9 15zM4 7l4.323 2.702m8.09 5.056L20 17M4 17l3.529-2.206m7.08-4.424L20 7m-8-4v5m0 7v6"></svg:path></svg:g>`,
})
export class TablerBrandStorjIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
