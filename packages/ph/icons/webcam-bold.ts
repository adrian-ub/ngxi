import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWebcamBoldIcon],svg[ph-webcam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-56 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 92h-84v-8.87a84 84 0 1 0-24 0V196H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M68 104a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></svg:path>`,
})
export class PhWebcamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
