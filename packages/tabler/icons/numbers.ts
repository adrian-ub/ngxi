import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumbersIcon],svg[tabler-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10V3L6 5m0 11a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3h4m5-7a2 2 0 1 0 2-2a2 2 0 1 0-2-2m-8.5 0h3"></svg:path>`,
})
export class TablerNumbersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
