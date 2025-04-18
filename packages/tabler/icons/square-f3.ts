import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareF3Icon],svg[tabler-square-f3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M13 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H14h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5M8 12h2m0-3H8v6"></svg:path></svg:g>`,
})
export class TablerSquareF3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
