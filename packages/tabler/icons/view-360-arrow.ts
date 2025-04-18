import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerView360ArrowIcon],svg[tabler-view-360-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 15.328c2.414-.718 4-1.94 4-3.328c0-2.21-4.03-4-9-4s-9 1.79-9 4s4.03 4 9 4"></svg:path><svg:path d="m9 13l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerView360ArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
