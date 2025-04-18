import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagEthiopiaIcon],svg[twemoji-flag-for-flag-ethiopia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCDD0A" d="M0 13h36v10H0z"></svg:path><svg:path fill="#088930" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#DA1219" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"></svg:path><svg:circle fill="#0F47AF" cx="18" cy="18" r="9"></svg:circle><svg:g fill="#FCDD0A"><svg:path d="M13.25 24.469l1.719-5.531l-2.731-1.985h1.156l3.778 2.893l-.594.359l-.922-.83l-1.468 4.406z"></svg:path><svg:path d="M22.609 24.469l-4.73-3.345l-2.723 1.97l.357-1.1l3.964-2.824l.158.676l-1.128.759l3.739 2.759z"></svg:path><svg:path d="M25.382 15.64l-4.519 3.372l1.012 3.222l-.935-.677l-1.463-4.633l.693.058l.395 1.272l3.7-2.647z"></svg:path><svg:path d="M17.872 10.07l1.86 5.487l3.344.05l-.933.68l-4.549-.038l.271-.642l.979-.06l-1.327-4.37zm-7.669 5.477h5.906l1.063-3.254l.358 1.098L16.012 18l-.526-.456l.476-1.372l-4.783.029zm7.526 6.765h.417v3.647h-.417zm7.847-2.087l-.128.396L22 19.466l.128-.396z"></svg:path><svg:path d="M22.473 11.453l.337.245l-2.177 3.021l-.337-.244zm-9.359.245l.337-.245l2.174 3.021l-.336.245zm-2.637 8.923l-.129-.396l3.454-1.155l.129.397z"></svg:path></svg:g>`,
})
export class TwemojiFlagForFlagEthiopiaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
