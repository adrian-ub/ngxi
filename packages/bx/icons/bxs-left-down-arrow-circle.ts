import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsLeftDownArrowCircleIcon],svg[bx-bxs-left-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.071 19.071c3.898-3.899 3.898-10.244 0-14.143c-3.899-3.899-10.244-3.898-14.143 0c-3.898 3.899-3.899 10.243 0 14.143c3.9 3.899 10.244 3.899 14.143 0zM8.464 8.464l2.829 2.829l3.535-3.536l1.414 1.414l-3.535 3.536l2.828 2.829H8.464V8.464z" fill="currentColor"></svg:path>`,
})
export class BxBxsLeftDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
