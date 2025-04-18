import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignRightIcon],svg[vaadin-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h11v3H5zM1 4h15v3H1zm2 4h13v3H3zm-3 4h16v3H0z"></svg:path>`,
})
export class VaadinAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
