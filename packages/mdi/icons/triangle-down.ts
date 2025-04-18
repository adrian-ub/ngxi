import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriangleDownIcon],svg[mdi-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22L12 22"></svg:path>`,
})
export class MdiTriangleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
