import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEllipsisHIcon],svg[vaadin-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h4v4H0zm6 0h4v4H6zm6 0h4v4h-4z"></svg:path>`,
})
export class VaadinEllipsisHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
