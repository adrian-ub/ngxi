import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeRibbonIcon],svg[tabler-home-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 15h5v7l-2.5-1.5L16 22z"></svg:path><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h1.5"></svg:path></svg:g>`,
})
export class TablerHomeRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
