import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeEcoIcon],svg[tabler-home-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4"></svg:path><svg:path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3"></svg:path></svg:g>`,
})
export class TablerHomeEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
