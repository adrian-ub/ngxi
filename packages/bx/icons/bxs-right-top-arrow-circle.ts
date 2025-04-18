import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsRightTopArrowCircleIcon],svg[bx-bxs-right-top-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0c-3.898 3.899-3.898 10.244 0 14.143c3.899 3.898 10.243 3.898 14.143 0c3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607l-2.828-2.829l-3.535 3.536l-1.414-1.414l3.535-3.536l-2.828-2.829h7.07v7.072z" fill="currentColor"></svg:path>`,
})
export class BxBxsRightTopArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
