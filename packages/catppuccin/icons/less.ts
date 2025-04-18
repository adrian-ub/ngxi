import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLessIcon],svg[catppuccin-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M4 2.5c-.74 0-1.5.76-1.5 1.5v2c0 1.1-1.1 2-1.83 2c.74 0 1.83.9 1.83 2v2c0 .74.76 1.5 1.5 1.5m1.5-8v5a1 1 0 0 0 1 1H7m4.5-4c0-.69-.59-1-1.25-1h-.5c-.66 0-1.25.56-1.25 1.25S9.09 9 9.75 9h.5c.66 0 1.25.56 1.25 1.25s-.59 1.25-1.25 1.25h-.5c-.66 0-1.25-.31-1.25-1m3.5-8c.74 0 1.5.76 1.5 1.5v2c0 1.1 1.1 2 1.83 2c-.74 0-1.83.9-1.83 2v2c0 .74-.76 1.5-1.5 1.5"></svg:path>`,
})
export class CatppuccinLessIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
