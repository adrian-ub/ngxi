import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotateClockwise2Icon],svg[tabler-rotate-clockwise-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01m.57 4.09v.01m2.53 3.26v.01M11 19.94v.01"></svg:path>`,
})
export class TablerRotateClockwise2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
