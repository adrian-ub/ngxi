import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignRightIcon],svg[tabler-sign-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h4m-2 0V11m0-5V3M6 6h10l2 2.5l-2 2.5H6z"></svg:path>`,
})
export class TablerSignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
