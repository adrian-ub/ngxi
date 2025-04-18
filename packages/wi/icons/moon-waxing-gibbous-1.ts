import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingGibbous1Icon],svg[wi-moon-waxing-gibbous-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.93 14.44c-.02 4.53.33 8.29 1.04 11.27c2.04.01 3.93-.49 5.65-1.49s3.1-2.36 4.11-4.08s1.52-3.61 1.53-5.65s-.49-3.93-1.49-5.65q-1.5-2.595-4.08-4.11c-2.58-1.515-3.6-1.52-5.64-1.53c-.73 3.71-1.11 7.46-1.12 11.24"></svg:path>`,
})
export class WiMoonWaxingGibbous1Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
