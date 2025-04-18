import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLotOfCashIcon],svg[iconoir-lot-of-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m14.5-3.99l.01-.011M7.5 14.01l.01-.011"></svg:path><svg:path d="M4 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2m-6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path></svg:g>`,
})
export class IconoirLotOfCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
