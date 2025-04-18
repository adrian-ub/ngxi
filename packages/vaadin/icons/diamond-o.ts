import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDiamondOIcon],svg[vaadin-diamond-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2H3L0 5.5L8 15l8-9.5zM4.64 5H1.75l1.52-1.78zm1.78 0L8 3.16L9.58 5zM10 6l-2 6.68L6 6zM5.26 6l1.89 6.44L1.73 6zm5.49 0h3.53l-5.43 6.44zm.62-1l1.37-1.78L14.25 5h-2.9zM12 3l-1.44 1.81L9.1 3zM5.43 4.83L4 3h2.9z"></svg:path>`,
})
export class VaadinDiamondOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
