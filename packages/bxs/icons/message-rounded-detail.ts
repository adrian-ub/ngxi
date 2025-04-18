import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMessageRoundedDetailIcon],svg[bxs-message-rounded-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.515 5 6.934V22l5.34-4.005C17.697 17.853 22 14.32 22 10c0-4.411-4.486-8-10-8m2 11H7v-2h7zm3-4H7V7h10z"></svg:path>`,
})
export class BxsMessageRoundedDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
