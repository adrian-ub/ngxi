import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDiamondIcon],svg[vaadin-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h4l3 8.6zm16 0h-4l-3 8.6zm-8 9L5 6h6zM4 5H0l2-3zm12 0h-4l2-3zm-6 0H6l2-3zM3.34 2H7L5 5zM9 2h4l-2 3z"></svg:path>`,
})
export class VaadinDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
