import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaNavigationOutlineIcon],svg[eva-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a.94.94 0 0 1-.55-.17L12 14.9l-7.45 4.93a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20m-8-7.3a1 1 0 0 1 .55.17l4.88 3.23L12 5.24L6.57 16.1l4.88-3.23a1 1 0 0 1 .55-.17"></svg:path>`,
})
export class EvaNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
