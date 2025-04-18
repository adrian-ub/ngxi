import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraOutdoorIcon],svg[ic-sharp-camera-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3L4 9v12h16v-2H6v-9l6-4.5l6 4.5v1h2V9z"></svg:path>`,
})
export class IcSharpCameraOutdoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
