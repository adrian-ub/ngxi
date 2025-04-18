import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessaltIcon],svg[whh-brightnessalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 419l140 93l-140 93q0 2-1.5 6t-2.5 5l75 152l-169 11q-1 1-3.5 4t-3.5 4l-11 168l-151-74q-2 0-6 1.5t-6 1.5l-93 140l-93-140q-2 0-6-1.5t-6-1.5l-151 74l-11-169q-1-1-4-3.5t-4-3.5L69 768l74-152q0-1-1.5-5t-1.5-6L0 512l140-93q0-2 1.5-6t2.5-5L69 256l169-11q1-1 3.5-4t3.5-4l11-168l151 74q2 0 6-1.5t6-2.5L512 0l93 139q2 1 6 2.5t6 1.5l151-74l11 169q1 1 4 3.5t4 3.5l168 11l-75 151q1 2 2.5 6t1.5 6M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhBrightnessaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
