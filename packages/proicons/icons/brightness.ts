import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBrightnessIcon],svg[proicons-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="4.25"></svg:circle><svg:path stroke-linecap="round" d="M12 2.75v1.5M5.46 5.46l1.06 1.06M12 19.75v1.5m5.48-3.77l1.06 1.06M2.75 12h1.5m1.21 6.54l1.06-1.06M19.75 12h1.5m-3.77-5.48l1.06-1.06"></svg:path></svg:g>`,
})
export class ProiconsBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
