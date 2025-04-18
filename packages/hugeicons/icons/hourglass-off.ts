import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHourglassOffIcon],svg[hugeicons-hourglass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5.02a6.996 6.996 0 0 0 7 6.992c-3.866 0-7 3.13-7 6.993V22m14-2.996V22m0 .002H4M2 2.022l20 19.98M6.563 1.998h13.5m-4.022 8.99c.67-.55 2.168-1.664 2.783-4.189c.273-1.124.203-3.201.203-4.801" color="currentColor"></svg:path>`,
})
export class HugeiconsHourglassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
