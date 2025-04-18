import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBombIcon],svg[tabler-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.349 5.349L18.65 8.65a1.2 1.2 0 0 1 0 1.698l-.972.972a7.5 7.5 0 1 1-5-5l.972-.972a1.2 1.2 0 0 1 1.698 0z"></svg:path><svg:path d="m17 7l1.293-1.293A2.4 2.4 0 0 0 19 4a1 1 0 0 1 1-1h1M7 13a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class TablerBombIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
