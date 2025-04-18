import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleSmallUpIcon],svg[mdi-triangle-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h8l-4-7"></svg:path>`,
})
export class MdiTriangleSmallUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
