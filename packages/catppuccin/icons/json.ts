import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJsonIcon],svg[catppuccin-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5H4c-.75 0-1.5.75-1.5 1.5v2c0 1.1-1 2-1.83 2c.83 0 1.83.9 1.83 2v2c0 .75.75 1.5 1.5 1.5h.5m7-11h.5c.75 0 1.5.75 1.5 1.5v2c0 1.1 1 2 1.83 2c-.83 0-1.83.9-1.83 2v2c0 .74-.75 1.5-1.5 1.5h-.5m-6.5-3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class CatppuccinJsonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
