import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLuggageDepositFillIcon],svg[ri-luggage-deposit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zm-5 5H8v11h2zm6 0h-2v11h2zm-2-3h-4v1h4z"></svg:path>`,
})
export class RiLuggageDepositFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
