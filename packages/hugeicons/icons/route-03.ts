import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoute03Icon],svg[hugeicons-route-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2c2.165 0 4 1.815 4 4.017c0 2.236-1.865 3.806-3.588 4.873a.83.83 0 0 1-.824 0C15.868 9.814 14 8.262 14 6.017C14 3.815 15.835 2 18 2m0 4h.009"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:path d="M11 7H9.5C7.567 7 6 8.343 6 10s1.567 3 3.5 3h3c1.933 0 3.5 1.343 3.5 3s-1.567 3-3.5 3H11"></svg:path></svg:g>`,
})
export class HugeiconsRoute03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
