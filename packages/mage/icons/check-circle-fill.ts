import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCheckCircleFillIcon],svg[mage-check-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.07 8.34l-5.37 5.37a1.8 1.8 0 0 1-.65.44c-.497.2-1.053.2-1.55 0a2 2 0 0 1-.65-.44L6.19 12.8a1.001 1.001 0 1 1 1.41-1.42l2.67 2.67l5.38-5.37a1 1 0 0 1 1.42 0a1 1 0 0 1 0 1.38z"></svg:path>`,
})
export class MageCheckCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
