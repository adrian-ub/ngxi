import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAlignLeftIcon],svg[uit-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m0 4h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1m15 7h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m4-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
