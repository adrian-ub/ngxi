import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaSmilingFaceOutlineIcon],svg[eva-smiling-face-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m5 9a5 5 0 0 1-10 0Z"></svg:path>`,
})
export class EvaSmilingFaceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
