import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChevronCompactRightIcon],svg[tabler-chevron-compact-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 4l3 8l-3 8"></svg:path>`,
})
export class TablerChevronCompactRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
