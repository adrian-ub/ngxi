import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt2Icon],svg[lets-icons-basket-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 10H4a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m6.198 12.78l.604 5.44A2 2 0 0 0 8.79 20h6.42a2 2 0 0 0 1.988-1.78l.604-5.44A2 2 0 0 1 19.79 11H4.21a2 2 0 0 1 1.988 1.78M11 14a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 5L6 9m10-4l2 4"></svg:path></svg:g>`,
})
export class LetsIconsBasketAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
