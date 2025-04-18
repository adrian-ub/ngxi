import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTurkmenistanIcon],svg[openmoji-flag-turkmenistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#186648" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M8.171 17h14.928v38H8.171z"></svg:path><svg:path fill="#781e32" d="M18.624 17h-5.966l-4.487 4.216l7.47 7.018l7.469-7.018z"></svg:path><svg:path fill="#f1b31c" d="M17.114 19.628h-2.947l-1.474 1.588l1.474 1.588h2.947l1.474-1.588z"></svg:path><svg:path fill="#781e32" d="m15.641 38.16l-7.47-7.018l7.47-7.019l7.469 7.019z"></svg:path><svg:path fill="#f1b31c" d="M17.114 29.554h-2.947l-1.474 1.588l1.474 1.588h2.947l1.474-1.588z"></svg:path><svg:path fill="#781e32" d="m15.641 48.086l-7.47-7.019l7.47-7.018l7.469 7.018z"></svg:path><svg:path fill="#f1b31c" d="M17.114 39.479h-2.947l-1.474 1.588l1.474 1.588h2.947l1.474-1.588z"></svg:path><svg:path fill="#781e32" d="m18.846 55l4.264-4.007l-7.469-7.018l-7.47 7.018L12.435 55z"></svg:path><svg:path fill="#f1b31c" d="M17.114 49.405h-2.947l-1.474 1.588l1.474 1.588h2.947l1.474-1.588z"></svg:path><svg:g fill="#fff"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".995" d="M37.493 21.833a7.765 7.765 0 0 1-6.815 13.66a7.77 7.77 0 1 0 6.815-13.66"></svg:path><svg:circle cx="32.763" cy="23.055" r=".739"></svg:circle><svg:circle cx="32.763" cy="26.009" r=".739"></svg:circle><svg:circle cx="29.809" cy="26.009" r=".739"></svg:circle><svg:circle cx="35.717" cy="26.009" r=".739"></svg:circle><svg:circle cx="32.763" cy="28.963" r=".739"></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTurkmenistanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
