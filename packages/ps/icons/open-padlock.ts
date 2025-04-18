import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psOpenPadlockIcon],svg[ps-open-padlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 43q35 0 60 25t25 60q0 21 22 21q21 0 21-21q0-52-38-90T192 0t-90 38t-38 90v64q-27 0-45.5 18.5T0 256v192q0 27 18.5 45.5T64 512h256q27 0 45.5-18.5T384 448V256q0-27-18.5-45.5T320 192H107v-64q0-35 25-60t60-25m128 192q21 0 21 21v192q0 21-21 21H64q-21 0-21-21V256q0-21 21-21zM171 380v25q0 22 21 22t21-22v-25q43-15 43-60q0-27-18.5-45.5T192 256t-45.5 18.5T128 320q0 20 12 36.5t31 23.5m21-81q21 0 21 21t-21 21t-21-21t21-21"></svg:path>`,
})
export class PsOpenPadlockIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
