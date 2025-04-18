import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsRightDownIcon],svg[tabler-arrows-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 17l4 4l4-4"></svg:path><svg:path d="M7 21V10a3 3 0 0 1 3-3h11"></svg:path><svg:path d="m17 11l4-4l-4-4"></svg:path></svg:g>`,
})
export class TablerArrowsRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
