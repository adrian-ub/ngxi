import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGenderMaleFemaleIcon],svg[mdi-gender-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.58 4H14V2h7v7h-2V5.41l-3.83 3.83A5 5 0 0 1 12 16.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1A5 5 0 0 1 6 12a5 5 0 0 1 5-5c1 0 1.96.3 2.75.83zM11 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiGenderMaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
