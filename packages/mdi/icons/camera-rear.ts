import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCameraRearIcon],svg[mdi-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2c1.09 0 2 .9 2 2a2 2 0 0 1-2 2m5-6H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-3 20v2h5v-2m-9 0H5v2h5v2l3-3l-3-3z"></svg:path>`,
})
export class MdiCameraRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
