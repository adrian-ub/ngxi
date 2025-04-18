import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCapsuleHorizontalFilledIcon],svg[tabler-capsule-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H9a7 7 0 1 0 0 14h6a7 7 0 0 0 7-7l-.007-.303A7 7 0 0 0 15 5"></svg:path>`,
})
export class TablerCapsuleHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
