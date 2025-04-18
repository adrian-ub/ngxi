import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRunIcon],svg[grommet-icons-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 11l3 2m0-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2M9.5 9.5L9.525 6H15L8 17H4m11-9l-3 5l.5 1L17 7.5L15 6m-4 7l5 3.5v5"></svg:path>`,
})
export class GrommetIconsRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
