import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCardKIcon],svg[tabler-play-card-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 6h.01M16 18h.01M10 9v6"></svg:path><svg:path d="m14 9l-3 3l3 3m-4-3h1"></svg:path></svg:g>`,
})
export class TablerPlayCardKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
