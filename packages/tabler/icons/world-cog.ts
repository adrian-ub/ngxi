import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWorldCogIcon],svg[tabler-world-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-8.979 9M3.6 9h16.8M3.6 15h8.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.522 10.376M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"></svg:path></svg:g>`,
})
export class TablerWorldCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
