import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiamondIcon],svg[tabler-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 5h12l3 5l-8.5 9.5a.7.7 0 0 1-1 0L3 10z"></svg:path><svg:path d="M10 12L8 9.8l.6-1"></svg:path></svg:g>`,
})
export class TablerDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
