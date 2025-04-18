import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPhoneCameraLineIcon],svg[ri-phone-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.803 4a6 6 0 0 0-.72 2H3v12h18v-5.083a6 6 0 0 0 2-.72V19a.996.996 0 0 1-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m-2 2h2v3h-2z"></svg:path>`,
})
export class RiPhoneCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
