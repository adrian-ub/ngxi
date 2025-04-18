import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCheeseIcon],svg[tdesign-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.533 1.467l-3.998 12.658l-.833-.112a1.5 1.5 0 0 0-.89 2.82l.746.387l-1.885 5.968l-1.662-.395c-6.318-1.505-11.29-6.446-12.795-12.769L.812 8.327l10.97-3.465l.266 1.018a1.501 1.501 0 1 0 2.858-.903l-.366-.986zm-5.538 3.846A3.5 3.5 0 0 1 13.5 9a3.5 3.5 0 0 1-2.969-1.646L3.19 9.674c1.349 5.48 5.657 9.774 11.138 11.137l.85-2.693a3.5 3.5 0 0 1 1.925-6.096l2.365-7.49zM9.5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M6 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class TdesignCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
