import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCameraflashIcon],svg[whh-cameraflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m640 768l-352 256l-160-256h149l64-192H0L192 0h192L235 448h341L469 768z"></svg:path>`,
})
export class WhhCameraflashIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
