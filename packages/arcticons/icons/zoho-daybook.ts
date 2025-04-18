import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZohoDaybookIcon],svg[arcticons-zoho-daybook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.887 32.355V9.08a3.58 3.58 0 0 1 3.58-3.581h25.065a3.58 3.58 0 0 1 3.58 3.58v22.678a3.58 3.58 0 0 1-3.58 3.58H11.468a3.58 3.58 0 0 0 0 7.162h25.064a3.58 3.58 0 0 0 3.58-3.58M17.963 17.775h12.074m-8.386-6.151h8.386"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.963 11.624h3.688c3.373 0 6.108 2.74 6.108 6.12s-2.735 6.122-6.108 6.122l6.108 5.98"></svg:path>`,
})
export class ArcticonsZohoDaybookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
