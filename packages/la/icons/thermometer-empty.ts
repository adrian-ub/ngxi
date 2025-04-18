import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laThermometerEmptyIcon],svg[la-thermometer-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5v11c-1.738 1.05-3 2.828-3 5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.172-1.262-3.95-3-5v-1h2v-2h-2v-2h2V9h-2V7h2V5zm2 2h2v10.063l.594.28C19.004 17.962 20 19.353 20 21c0 2.219-1.781 4-4 4s-4-1.781-4-4c0-1.648.996-3.04 2.406-3.656l.594-.282z"></svg:path>`,
})
export class LaThermometerEmptyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
