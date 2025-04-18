import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggWebcamIcon],svg[gg-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 14.9A5.002 5.002 0 0 0 12 5a5 5 0 0 0-1 9.9V17H7v2h10v-2h-4zM12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
