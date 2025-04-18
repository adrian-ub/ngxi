import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleSmallDownIcon],svg[mdi-triangle-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h8l-4 7"></svg:path>`,
})
export class MdiTriangleSmallDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
