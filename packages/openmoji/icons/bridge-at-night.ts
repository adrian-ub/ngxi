import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBridgeAtNightIcon],svg[openmoji-bridge-at-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBridgeAtNight0" d="M41.773 19.473a7.22 7.22 0 0 1-5.695 9.864"></svg:path><svg:path id="openmojiBridgeAtNight1" d="M41.773 19.473a6.054 6.054 0 0 1-5.695 9.864"></svg:path></svg:defs><svg:g stroke="#000"><svg:g fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiBridgeAtNight0"></svg:use><svg:use href="#openmojiBridgeAtNight1"></svg:use></svg:g><svg:path stroke-linejoin="round" stroke-width="2" d="m22 22.381l1.854 1.325l-.688-2.173L25 20.18l-2.279-.107L22 18l-.721 2.162L19 20.18l1.834 1.353l-.688 2.173z"></svg:path><svg:path stroke-linejoin="round" stroke-width=".75" d="m27 32.46l.618.442l-.229-.724l.611-.451l-.76-.006L27 31l-.24.721l-.76.006l.611.361l-.229.814z"></svg:path><svg:path stroke-linejoin="round" d="m51.5 26.337l.927.663l-.344-1.087l.917-.676l-1.14-.099l-.36-.991l-.36 1.081l-1.14.009l.917.676L50.573 27z"></svg:path></svg:g><svg:rect width="48" height="48" x="12" y="12" fill="#1e50a0" rx="1"></svg:rect><svg:g stroke="#f1b31c"><svg:g fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiBridgeAtNight0"></svg:use><svg:use href="#openmojiBridgeAtNight1"></svg:use></svg:g><svg:path fill="#f1b31c" stroke-linejoin="round" stroke-width="2" d="m22 22.381l1.854 1.325l-.688-2.173L25 20.18l-2.279-.107L22 18l-.721 2.162L19 20.18l1.834 1.353l-.688 2.173z"></svg:path><svg:path fill="#f1b31c" stroke-linejoin="round" stroke-width=".75" d="m27 32.46l.618.442l-.229-.724l.611-.451l-.76-.006L27 31l-.24.721l-.76.006l.611.361l-.229.814z"></svg:path><svg:path fill="#f1b31c" stroke-linejoin="round" d="m51.5 26.337l.927.663l-.344-1.087l.917-.676l-1.14-.099l-.36-.991l-.36 1.081l-1.14.009l.917.676L50.573 27z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M12.923 48.038h46.154M24 36.962L12 48.038"></svg:path><svg:path stroke-miterlimit="10" d="M24 36.962v23.076m24 0V36.962m-24 4.26l-7.385 6.816M24 45.482l-2.769 2.556"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M48 36.962L36 48.038"></svg:path><svg:path stroke-miterlimit="10" d="m48 41.222l-7.385 6.816M48 45.482l-2.769 2.556"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m24 36.962l12 11.076"></svg:path><svg:path stroke-miterlimit="10" d="m24 41.222l7.385 6.816M24 45.482l2.769 2.556"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m48 36.962l12 11.076"></svg:path><svg:path stroke-miterlimit="10" d="m48 41.222l7.385 6.816M48 45.482l2.769 2.556"></svg:path><svg:rect width="48" height="48" x="12" y="12" stroke-linejoin="round" rx="1"></svg:rect></svg:g>`,
})
export class OpenmojiBridgeAtNightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
