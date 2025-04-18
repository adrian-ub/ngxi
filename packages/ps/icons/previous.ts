import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPreviousIcon],svg[ps-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 67Q5 67 5 88v256q0 21 22 21q21 0 21-21v-73l134 150q8 6 15 6q5 0 9-2q13-3 13-19V24q0-15-13-19t-24 6L48 161V88q0-21-21-21m149 12v271L54 216z"></svg:path>`,
})
export class PsPreviousIcon {
  readonly viewBox = input("0 0 224 472")
  readonly width = input("0.48em")
  readonly height = input("1em")
}
