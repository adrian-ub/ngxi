import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSendEmailEnvelopeOutlineIcon],svg[bubbles-send-email-envelope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.4 17.2a1 1 0 0 1-.979.8H5.96a1 1 0 0 1-.979-1.2l2.083-10a1 1 0 0 1 .979-.8H22.5a1 1 0 0 1 .979 1.2z"></svg:path><svg:path d="m7.427 6.212l5.117 5.51a2 2 0 0 0 2.613.278l8.095-5.666M.5 7h4m-4 3h3m-3 3h2"></svg:path></svg:g>`,
})
export class BubblesSendEmailEnvelopeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
