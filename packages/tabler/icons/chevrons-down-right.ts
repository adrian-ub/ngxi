import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChevronsDownRightIcon],svg[tabler-chevrons-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 5v8H5"></svg:path><svg:path d="M17 9v8H9"></svg:path></svg:g>`,
})
export class TablerChevronsDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
