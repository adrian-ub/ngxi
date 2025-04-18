import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHardDriveFillIcon],svg[ri-hard-drive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 2H20a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.05q.494.05 1 .05c5.523 0 10-4.477 10-10q0-.506-.05-1M15 16v2h2v-2zM11.938 2Q12 2.492 12 3a8 8 0 0 1-9 7.938V3a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiHardDriveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
