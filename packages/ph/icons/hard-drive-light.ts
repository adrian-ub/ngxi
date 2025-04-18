import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHardDriveLightIcon],svg[ph-hard-drive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66H32a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-28-48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhHardDriveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
