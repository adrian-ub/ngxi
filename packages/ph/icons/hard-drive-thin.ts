import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHardDriveThinIcon],svg[ph-hard-drive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-32-48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhHardDriveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
