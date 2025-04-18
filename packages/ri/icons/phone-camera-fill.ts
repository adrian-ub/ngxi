import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPhoneCameraFillIcon],svg[ri-phone-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.803 4A6 6 0 0 0 23 12.197V19a.996.996 0 0 1-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1 6v3h2v-3z"></svg:path>`,
})
export class RiPhoneCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
