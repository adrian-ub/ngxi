import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIroningOffIcon],svg[tabler-ironing-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007.044M18 18H3a7 7 0 0 1 7-7h1m4 0h4.8M3 3l18 18"></svg:path>`,
})
export class TablerIroningOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
