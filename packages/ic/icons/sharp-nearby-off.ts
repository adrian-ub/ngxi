import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNearbyOffIcon],svg[ic-sharp-nearby-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.82 12.01L18.83 16l-1.81-1.81L19.2 12L12 4.8L9.81 6.99L8 5.17l3.99-3.99zm-1.63 9.18l-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99L5.17 8L1.39 4.22L2.8 2.81zm-7-4.17l-1.39-1.39l-.8.8L7.58 12l.8-.8l-1.4-1.39L4.8 12l7.2 7.2zM16.42 12L12 7.58l-.8.8l4.42 4.42z"></svg:path>`,
})
export class IcSharpNearbyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
