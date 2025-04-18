import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronsDownIcon],svg[tabler-circle-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 9l-3 3l-3-3m6 4l-3 3l-3-3"></svg:path><svg:path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18"></svg:path></svg:g>`,
})
export class TablerCircleChevronsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
