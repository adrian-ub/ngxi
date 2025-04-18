import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGreenpassIcon],svg[arcticons-greenpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="10.467" r="2.824" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.12 28.156l7.83 7.784l15.93-15.748"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.561 8.583h9.018a2.88 2.88 0 0 1 2.925 2.7V40.35a3.32 3.32 0 0 1-2.835 3.15H9.331a2.634 2.634 0 0 1-2.835-2.7V11.958c.066-1.67.842-3.29 2.475-3.42l9.442.045h.026A5.49 5.49 0 0 1 24 4.5a5.49 5.49 0 0 1 5.561 4.083"></svg:path>`,
})
export class ArcticonsGreenpassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
