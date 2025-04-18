import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiShelterIcon],svg[maki-shelter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2L1 6v2l1-.333V13h10v-2H4V7l9-3z"></svg:path>`,
})
export class MakiShelterIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
