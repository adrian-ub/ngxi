import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrolley01Icon],svg[hugeicons-trolley-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 2h1.301c1.186 0 1.779 0 2.18.371c.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976c.536.495 1.326.495 2.907.495H21"></svg:path><svg:circle cx="10.5" cy="19.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5"></svg:circle><svg:path d="M20 14h-6c-.943 0-1.414 0-1.707-.366S12 12.678 12 11.5s0-1.768.293-2.134S13.057 9 14 9h6c.943 0 1.414 0 1.707.366S22 10.322 22 11.5s0 1.768-.293 2.134S20.943 14 20 14m-2-5h-6c-.943 0-1.414 0-1.707-.366S10 7.679 10 6.5s0-1.768.293-2.134S11.057 4 12 4h6c.943 0 1.414 0 1.707.366S20 5.321 20 6.5s0 1.768-.293 2.134S18.943 9 18 9"></svg:path></svg:g>`,
})
export class HugeiconsTrolley01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
