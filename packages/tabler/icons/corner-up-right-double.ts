import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerUpRightDoubleIcon],svg[tabler-corner-up-right-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18v-6a3 3 0 0 1 3-3h7"></svg:path><svg:path d="m10 13l4-4l-4-4m5 8l4-4l-4-4"></svg:path></svg:g>`,
})
export class TablerCornerUpRightDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
