import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faVolumeDownIcon],svg[fa-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 96v1088q0 26-19 45t-45 19t-45-19L326 896H64q-26 0-45-19T0 832V448q0-26 19-45t45-19h262L659 51q19-19 45-19t45 19t19 45m384 544q0 76-42.5 141.5T997 875q-10 5-25 5q-26 0-45-18.5T908 816q0-21 12-35.5t29-25t34-23t29-36t12-56.5t-12-56.5t-29-36t-34-23t-29-25t-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5q70 27 112.5 93t42.5 142"></svg:path>`,
})
export class FaVolumeDownIcon {
  readonly viewBox = input("0 0 1152 1280")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
