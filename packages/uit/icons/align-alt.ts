import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAlignAltIcon],svg[uit-align-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0 4h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m3-11h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1m-3 15h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0-12h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m7 12h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m4-8h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m-11-8h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m11 4h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0 8h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitAlignAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
