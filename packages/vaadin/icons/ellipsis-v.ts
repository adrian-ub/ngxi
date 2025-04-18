import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisVIcon],svg[vaadin-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h4v4H6zm0 6h4v4H6zm0 6h4v4H6z"></svg:path>`,
})
export class VaadinEllipsisVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
