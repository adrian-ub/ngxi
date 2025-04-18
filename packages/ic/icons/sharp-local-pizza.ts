import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLocalPizzaIcon],svg[ic-sharp-local-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2M7 7c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m5 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcSharpLocalPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
