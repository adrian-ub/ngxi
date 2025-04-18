import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber31SmallIcon],svg[tabler-number-31-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8h1v8M7 8h2.5A1.5 1.5 0 0 1 11 9.5v1A1.5 1.5 0 0 1 9.5 12H8h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 9.5 16H7"></svg:path>`,
})
export class TablerNumber31SmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
