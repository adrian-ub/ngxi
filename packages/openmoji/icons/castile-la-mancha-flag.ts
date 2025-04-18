import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCastileLaManchaFlagIcon],svg[openmoji-castile-la-mancha-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h31v38H5z"></svg:path><svg:path fill="#fcea2b" d="M12.25 28.45v15.17l3.614 2.087h9.527l3.355-1.937V28.33c-1.256-.313-2.565-.255-3.903 0v6.801h-8.59v-6.687c-1.29-.476-2.595-.504-4.003.011z"></svg:path><svg:path fill="#fcea2b" d="M18.29 35.13v-8.837c1.627-.508 3.236-.542 4.821 0v8.865"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-width="1.126" d="M15.31 33.79h10.78"></svg:path><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-width="2" d="M20.7 42.94v-3.288"></svg:path><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-width=".7" d="M26.79 32.33v-1.61m-12.54 1.61v-1.61m6.45-.43v-1.61m0 6.42v-2.422"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiCastileLaManchaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
