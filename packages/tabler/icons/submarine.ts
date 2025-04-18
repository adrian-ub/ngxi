import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSubmarineIcon],svg[tabler-submarine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9h0l-3 1.5L5 11zm14 0l-1-3h-5l-1 3m3-3V6a1 1 0 0 1 1-1h1"></svg:path>`,
})
export class TablerSubmarineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
