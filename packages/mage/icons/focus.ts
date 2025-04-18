import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFocusIcon],svg[mage-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.325 8.3V6.45a2.775 2.775 0 0 0-2.775-2.775h-2.775m0 16.65h2.775a2.775 2.775 0 0 0 2.775-2.775V15.7m-16.65 0v1.85a2.775 2.775 0 0 0 2.775 2.775h2.775m0-16.65H6.45A2.775 2.775 0 0 0 3.675 6.45V8.3"></svg:path><svg:path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"></svg:path></svg:g>`,
})
export class MageFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
