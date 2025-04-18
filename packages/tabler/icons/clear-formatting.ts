import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClearFormattingIcon],svg[tabler-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 15l4 4m0-4l-4 4M7 6V5h11v1M7 19h4m2-14L9 19"></svg:path>`,
})
export class TablerClearFormattingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
