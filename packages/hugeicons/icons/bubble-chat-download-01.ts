import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatDownload01Icon],svg[hugeicons-bubble-chat-download-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.006 2.191A10.5 10.5 0 0 0 12.005 2C6.48 2 2 6.284 2 11.567c0 2.538 1.034 4.845 2.72 6.556c.372.377.62.892.52 1.422a5.3 5.3 0 0 1-1.088 2.348a6.5 6.5 0 0 0 4.226-.657c.455-.241.682-.362.842-.386s.39.018.85.104q.959.18 1.935.18c5.373 0 9.758-4.052 9.995-9.134"></svg:path><svg:path d="M16 7.5c.491.506 1.8 2.5 2.5 2.5M21 7.5c-.491.506-1.8 2.5-2.5 2.5m0 0V2m-6.504 10h.008M8 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatDownload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
