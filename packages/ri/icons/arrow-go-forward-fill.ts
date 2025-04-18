import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowGoForwardFillIcon],svg[ri-arrow-go-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5l-6 5z"></svg:path>`,
})
export class RiArrowGoForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
