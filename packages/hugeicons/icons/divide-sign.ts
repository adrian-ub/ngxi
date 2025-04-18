import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDivideSignIcon],svg[hugeicons-divide-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18m-6.5-6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDivideSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
