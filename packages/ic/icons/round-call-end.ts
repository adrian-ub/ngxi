import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundCallEndIcon],svg[ic-round-call-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.51 15.48l2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.8-.8.8-2.13-.05-2.88c-6.41-5.66-16.07-5.66-22.48 0c-.85.75-.85 2.08-.05 2.88l1.22 1.22c.71.72 1.85.78 2.65.15"></svg:path>`,
})
export class IcRoundCallEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
