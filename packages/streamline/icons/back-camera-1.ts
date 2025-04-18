import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBackCamera1Icon],svg[streamline-back-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.5A.25.25 0 0 1 7 3m0 .5A.25.25 0 0 0 7 3"></svg:path><svg:path d="M10.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBackCamera1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
