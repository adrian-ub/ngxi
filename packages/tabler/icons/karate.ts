import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerKarateIcon],svg[tabler-karate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 9l4.5 1l3 2.5M13 21v-8l3-5.5"></svg:path><svg:path d="m8 4.5l4 2l4 1l4 3.5l-2 3.5"></svg:path></svg:g>`,
})
export class TablerKarateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
