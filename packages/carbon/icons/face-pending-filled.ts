import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFacePendingFilledIcon],svg[carbon-face-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 14a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5m9 0a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFacePendingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
