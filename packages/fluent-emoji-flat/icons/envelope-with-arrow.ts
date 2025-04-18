import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEnvelopeWithArrowIcon],svg[fluent-emoji-flat-envelope-with-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="22" x="1" y="8" fill="#B4ACBC" rx="1.5"></svg:rect><svg:rect width="28" height="18" x="2" y="10" fill="#CDC4D6" rx="1"></svg:rect><svg:path fill="#E1D8EC" d="m30 26.4l-12.971-7.783a2 2 0 0 0-2.058 0L2 26.4V28a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1z"></svg:path><svg:path fill="#998EA4" d="M2 12.766V11h28v1.766L17.544 20.24a3 3 0 0 1-3.088 0z"></svg:path><svg:path fill="#F3EEF8" d="M2 11.6V10a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v1.6l-12.971 7.783a2 2 0 0 1-2.058 0z"></svg:path><svg:path fill="#F92F60" d="M18.94 3.47v7.1c0 .16.13.28.28.28h.98c.62 0 .95.74.53 1.2l-4.01 4.41a.72.72 0 0 1-1.06 0l-4.02-4.41a.718.718 0 0 1 .53-1.2h.98c.16 0 .28-.13.28-.28v-7.1c0-.26.21-.47.47-.47h4.58c.25 0 .46.21.46.47"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEnvelopeWithArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
