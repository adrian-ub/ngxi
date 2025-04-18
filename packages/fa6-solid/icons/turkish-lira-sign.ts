import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTurkishLiraSignIcon],svg[fa6-solid-turkish-lira-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32c17.7 0 32 14.3 32 32v35.3l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9v29.4l119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9V416h63.8c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480H96c-17.7 0-32-14.3-32-32V280.1l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6v-29.4l-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6V64c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidTurkishLiraSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
