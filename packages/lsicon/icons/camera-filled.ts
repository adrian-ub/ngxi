import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCameraFilledIcon],svg[lsicon-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.136 2H5.864l-.928 1.5H1V13h14V3.5h-3.936zM8 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class LsiconCameraFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
