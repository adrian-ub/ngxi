import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEnvelopeIcon],svg[fluent-emoji-flat-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="22" x="1" y="5" fill="#B4ACBC" rx="1.5"></svg:rect><svg:rect width="28" height="18" x="2" y="7" fill="#CDC4D6" rx="1"></svg:rect><svg:path fill="#E1D8EC" d="m30 23.4l-12.971-7.782a2 2 0 0 0-2.058 0L2 23.4V25a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1z"></svg:path><svg:path fill="#998EA4" d="M2 9.766V8h28v1.766L17.544 17.24a3 3 0 0 1-3.088 0z"></svg:path><svg:path fill="#F3EEF8" d="M2 8.6V7a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v1.6l-12.971 7.783a2 2 0 0 1-2.058 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEnvelopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
