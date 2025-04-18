import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareOutlineIcon],svg[mdi-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v14h14V5z"></svg:path>`,
})
export class MdiSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
