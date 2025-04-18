import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneVariantOffIcon],svg[mdi-microphone-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22L16 19.26A4.01 4.01 0 0 1 12 23a4 4 0 0 1-4-4v-1H7l-.84-8.18a4.1 4.1 0 0 1-.83-1.22zM9 3a4 4 0 0 1 4 4H8.82L6.08 4.26C6.81 3.5 7.85 3 9 3m2.84 6.82l-.02.18l-2-2h3.05c-.18.7-.54 1.32-1.03 1.82M11 18h-1v1a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-1.73l-2.65-2.65zm7-8h2l-1 1l1 1h-2a2 2 0 0 0-2 2v.18l-1.7-1.68C14.9 11 16.33 10 18 10M8 12a1 1 0 0 0 1 1c.21 0 .4-.06.56-.17l-1.39-1.39c-.11.16-.17.35-.17.56"></svg:path>`,
})
export class MdiMicrophoneVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
