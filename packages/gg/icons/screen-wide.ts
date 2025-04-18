import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggScreenWideIcon],svg[gg-screen-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 16H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-8v1h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2zM3 7h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgScreenWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
