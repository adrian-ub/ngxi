import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSeatFlatAngledIcon],svg[mdi-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66l8.56 3.09c2.1.76 3.16 3.06 2.41 5.15M1.5 12.14L8 14.5V19h8v-1.63L20.5 19l.71-1.89l-19.02-6.86m5.11-.05c1.49-.7 2.12-2.51 1.41-4S6.2 4.08 4.7 4.8c-1.49.7-2.12 2.5-1.4 4c.7 1.49 2.5 2.12 4 1.4"></svg:path>`,
})
export class MdiSeatFlatAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
