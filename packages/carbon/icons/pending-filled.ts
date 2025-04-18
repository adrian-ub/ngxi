import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPendingFilledIcon],svg[carbon-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path><svg:path fill="none" d="M10 16a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-2a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPendingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
