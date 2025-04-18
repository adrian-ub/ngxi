import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBongIcon],svg[tabler-bong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3v8.416q.201.088.393.193L17 8l2 2l-3.608 3.608A5 5 0 1 1 9 11.416V3zM8 3h6M6.1 17h9.8"></svg:path>`,
})
export class TablerBongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
