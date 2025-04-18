import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCardIcon],svg[il-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M718 1q10 0 17 6t6 17v510q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V24Q0 14 7 7t16-6zM93 325h208v-69H93zm393 70H93v69h393zM649 94h-70v69h70z"></svg:path>`,
})
export class IlCardIcon {
  readonly viewBox = input("0 0 750 750")
  readonly width = input("1em")
  readonly height = input("1em")
}
