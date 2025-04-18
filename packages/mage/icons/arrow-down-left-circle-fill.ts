import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftCircleFillIcon],svg[mage-arrow-down-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.77 6.88l-6.38 6.39h5a1 1 0 0 1 0 2h-6.4a2 2 0 0 1-1.26-.44a1 1 0 0 1-.19-.15a1 1 0 0 1-.14-.16a2 2 0 0 1-.46-1.29V8.61a1 1 0 0 1 2 0v5l6.43-6.44a1 1 0 1 1 1.41 1.41z"></svg:path>`,
})
export class MageArrowDownLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
