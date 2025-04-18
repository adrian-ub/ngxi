import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleSmallIcon],svg[icon-park-rectangle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M36 14H12C10.8954 14 10 14.8954 10 16V32C10 33.1046 10.8954 34 12 34H36C37.1046 34 38 33.1046 38 32V16C38 14.8954 37.1046 14 36 14Z"></svg:path>`,
})
export class IconParkRectangleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
