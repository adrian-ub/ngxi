import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAlignCenterJustifyIcon],svg[uit-align-center-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 20h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m4-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1M2.5 5h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0 4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitAlignCenterJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
