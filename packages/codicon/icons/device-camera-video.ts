import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDeviceCameraVideoIcon],svg[codicon-device-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87l.75-.47V5.18zM10 11H2V5h8zm4-1l-3-1.7v-.52L14 6z"></svg:path>`,
})
export class CodiconDeviceCameraVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
