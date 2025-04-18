import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerUpLeftDoubleIcon],svg[tabler-corner-up-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 18v-6a3 3 0 0 0-3-3H9"></svg:path><svg:path d="M13 13L9 9l4-4m-5 8L4 9l4-4"></svg:path></svg:g>`,
})
export class TablerCornerUpLeftDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
