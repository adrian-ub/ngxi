import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChevronsDownLeftIcon],svg[tabler-chevrons-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5v8h8"></svg:path><svg:path d="M7 9v8h8"></svg:path></svg:g>`,
})
export class TablerChevronsDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
