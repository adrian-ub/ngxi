import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWebcamSolidIcon],svg[mynaui-webcam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.05 10.2a7.95 7.95 0 1 1 8.7 7.915v2.135h3.75a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 1 0-1.5h3.75v-2.135a7.95 7.95 0 0 1-7.2-7.915m6 0a1.95 1.95 0 1 0 3.9 0a1.95 1.95 0 0 0-3.9 0"></svg:path>`,
})
export class MynauiWebcamSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
