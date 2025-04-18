import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipCrown2FillIcon],svg[ri-vip-crown-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.806 5.2L7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86l4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15a1 1 0 0 1 1.548-.95m9.2 9.8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiVipCrown2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
