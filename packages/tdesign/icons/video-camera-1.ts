import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCamera1Icon],svg[tdesign-video-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h17v4.434l7-4.2v15.49l-7-4V20H0zm17 9.42l5 2.857v-8.51l-5 3zM2 6v12h13V6zm2 2h6v2H4z"></svg:path>`,
})
export class TdesignVideoCamera1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
