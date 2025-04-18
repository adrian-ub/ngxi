import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderSidesIcon],svg[tabler-border-sides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8v8m16 0V8M8 4h8M8 20h8"></svg:path>`,
})
export class TablerBorderSidesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
