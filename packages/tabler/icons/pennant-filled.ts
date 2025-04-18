import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPennantFilledIcon],svg[tabler-pennant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a1 1 0 0 1 .993.883L11 3v.35l8.406 3.736c.752.335.79 1.365.113 1.77l-.113.058L11 12.649V20h1a1 1 0 0 1 .117 1.993L12 22H8a1 1 0 0 1-.117-1.993L8 20h1V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerPennantFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
