import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDesktopIcon],svg[gg-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v1h18V6a1 1 0 0 0-1-1M3 18V9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
