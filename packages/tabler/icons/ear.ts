import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEarIcon],svg[tabler-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1-2 2a8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20"></svg:path><svg:path d="M10 10a3 3 0 1 1 5 2.2"></svg:path></svg:g>`,
})
export class TablerEarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
