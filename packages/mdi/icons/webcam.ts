import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWebcamIcon],svg[mdi-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7a7 7 0 0 1-7 7a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M6 22a2 2 0 0 1-2-2c0-.38.1-.73.29-1.03l1.82-3.16A9 9 0 0 0 12 18c2.25 0 4.31-.83 5.89-2.19l1.82 3.16c.19.3.29.65.29 1.03a2 2 0 0 1-2 2z"></svg:path>`,
})
export class MdiWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
