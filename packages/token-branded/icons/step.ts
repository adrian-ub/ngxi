import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStepIcon],svg[token-branded-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#64C557" fill-rule="evenodd" d="M19.994 16.498v-8.99l-7.995-4.5v8.994L4.005 16.5l7.997 4.5l7.987-4.495l.005.003v-.005l.003-.002z" clip-rule="evenodd"></svg:path><svg:path fill="#118AB2" d="m4 7.509l8.003-4.5v8.999L4 16.508z"></svg:path><svg:path fill="#00F8B7" d="M12.004 3L20 7.499l-2.5 1.624l-8-4.706z"></svg:path><svg:path fill="#09BD8E" d="M17.5 8.87v3.044l-8-4.537V4.411z"></svg:path><svg:path fill="#FFE3A3" d="m9.498 7.378l8.001 4.524l-3 1.692l-7.997-4.528z"></svg:path><svg:path fill="#FFBB1D" d="M14.498 13.593v3.027L6.5 11.95V9.06z"></svg:path><svg:path fill="#FF965E" d="m6.5 11.949l8 4.63L12 18l-8-4.498z"></svg:path><svg:path fill="#D94C00" d="M12 18v3l-8-4.503v-3z"></svg:path><svg:path fill="#06D6A0" d="M17.502 8.885L20 7.518v8.998l-2.498 1.388z"></svg:path><svg:path fill="#FFD166" d="m14.498 13.593l3.002-1.697v6.01l-3.003 1.676z"></svg:path><svg:path fill="#F3722C" d="m12 17.997l2.497-1.422v3.023L12 20.997z"></svg:path></svg:g>`,
})
export class TokenBrandedStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
