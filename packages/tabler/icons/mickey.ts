import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMickeyIcon],svg[tabler-mickey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8a7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3m13 0a3.5 3.5 0 1 1-.826 6.902a7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3"></svg:path><svg:path d="M5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0"></svg:path></svg:g>`,
})
export class TablerMickeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
