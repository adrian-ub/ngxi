import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDotsDiagonalIcon],svg[tabler-dots-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path>`,
})
export class TablerDotsDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
