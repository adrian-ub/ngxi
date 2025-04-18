import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLuggageIcon],svg[jam-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6v8h-2V6H7v8H5V6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M7.17 4h5.66a3.004 3.004 0 0 0-5.66 0M5.1 4a5.002 5.002 0 0 1 9.8 0h.1a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5z"></svg:path>`,
})
export class JamLuggageIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
