import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siWebcamFillIcon],svg[si-webcam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1a9 9 0 0 0-1 17.945V21H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2.055A9.001 9.001 0 0 0 12 1m-3 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class SiWebcamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
