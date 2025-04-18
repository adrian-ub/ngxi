import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCameraIcon],svg[ep-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 256H128v576h768zm-199.424-64l-32.064-64h-304.96l-32 64zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32m416 512a160 160 0 1 0 0-320a160 160 0 0 0 0 320m0 64a224 224 0 1 1 0-448a224 224 0 0 1 0 448"></svg:path>`,
})
export class EpCameraIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
