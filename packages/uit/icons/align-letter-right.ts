import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAlignLetterRightIcon],svg[uit-align-letter-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m12 17h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m0-6h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitAlignLetterRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
