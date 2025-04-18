import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiConfettiIcon],svg[mynaui-confetti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.675 20.971a.508.508 0 0 1-.65-.637L5.615 9.21c.12-.374.6-.475.862-.183l7.756 7.544a.51.51 0 0 1-.212.82zm7.219-11.695L13.3 6.66q1.925-2.091.48-3.66M8 5.25v-.5m12-.25V4m0 9.5V13m-2 5.5V18m-4.219-5.586l2.406-2.615q2.407-2.616 4.813 0"></svg:path>`,
})
export class MynauiConfettiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
