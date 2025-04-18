import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHandyvertragdeServiceweltIcon],svg[arcticons-handyvertragde-servicewelt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.08 5.84L21.47 30.11l-7.83-8.8l-3.48 3.1l11.51 13.43L42.5 10.03V38.5c0 2.21-1.79 4-4 4h-29c-2.21 0-4-1.79-4-4v-29c0-2.21 1.79-4 4-4h29c.56 0 1.1.12 1.58.34"></svg:path>`,
})
export class ArcticonsHandyvertragdeServiceweltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
