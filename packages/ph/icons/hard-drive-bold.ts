import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHardDriveBoldIcon],svg[ph-hard-drive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 112H36V84h184Zm-56-44a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhHardDriveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
