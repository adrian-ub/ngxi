import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCameraImageIcon],svg[mdi-camera-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m9.09 4.45l-2.04 2.73l1.55 2.07l-.87.66l-2.46-3.27L6 16h12z"></svg:path>`,
})
export class MdiCameraImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
