import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTakeoutDiningIcon],svg[ic-twotone-takeout-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.83 5l-2.8 2.73L7.12 9h9.75l.09-1.27L14.16 5zM7.79 18h8.44l.51-7H7.28z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20.59 6.05L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5l-1.59-1.56L2 7.44l3.23 3.11l.7 9.45h12.14l.7-9.44L22 7.46zM16.23 18H7.79l-.51-7h9.46zm.64-9H7.12l-.09-1.27L9.83 5h4.33l2.8 2.73z"></svg:path>`,
})
export class IcTwotoneTakeoutDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
