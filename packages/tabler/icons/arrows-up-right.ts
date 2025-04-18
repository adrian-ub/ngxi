import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsUpRightIcon],svg[tabler-arrows-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 21l4-4l-4-4"></svg:path><svg:path d="M21 17H10a3 3 0 0 1-3-3V3"></svg:path><svg:path d="M11 7L7 3L3 7"></svg:path></svg:g>`,
})
export class TablerArrowsUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
