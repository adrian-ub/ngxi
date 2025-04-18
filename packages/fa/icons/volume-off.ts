import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faVolumeOffIcon],svg[fa-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 96v1088q0 26-19 45t-45 19t-45-19L326 896H64q-26 0-45-19T0 832V448q0-26 19-45t45-19h262L659 51q19-19 45-19t45 19t19 45"></svg:path>`,
})
export class FaVolumeOffIcon {
  readonly viewBox = input("0 0 768 1280")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
