import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCreditCardPlusSolidIcon],svg[flowbite-credit-card-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 16.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m4.5 2.5v-1.5H14v-2h1.5V14h2v1.5H19v2h-1.5V19z" clip-rule="evenodd"></svg:path><svg:path d="M3.987 4A2 2 0 0 0 2 6v9a2 2 0 0 0 2 2h5v-2H4v-5h16V6a2 2 0 0 0-2-2z"></svg:path><svg:path fill-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteCreditCardPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
