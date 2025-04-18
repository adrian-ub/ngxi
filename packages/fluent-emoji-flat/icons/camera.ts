import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCameraIcon],svg[fluent-emoji-flat-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M5.5 11a.5.5 0 0 0-.5.5V13h4v-1.5a.5.5 0 0 0-.5-.5zm16 0a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="#E6E6E6" d="M2 14a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v2.5L28 22l2 5.5v.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.5L3.5 22L2 16.5z"></svg:path><svg:path fill="#533566" d="M2 16.5a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-27a.5.5 0 0 1-.5-.5z"></svg:path><svg:path fill="#321B41" d="M22 22a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path><svg:path fill="#9B9B9B" d="M16 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0 2a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path><svg:path fill="#433B6B" d="M18.5 22a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="#fff" d="M19.083 19.875c.414.717.362 1.523-.116 1.799c-.479.276-1.202-.082-1.616-.799s-.363-1.523.116-1.8c.478-.275 1.201.082 1.616.8"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
