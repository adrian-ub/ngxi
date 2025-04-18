import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightGenderFemaleIcon],svg[mdi-light-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 5C8.5 5 6 7.5 6 10.5c0 2.8 2.2 5.2 5 5.5v2H9v1h2v2h1v-2h2v-1h-2v-2c2.8-.3 5-2.6 5-5.5c0-3-2.5-5.5-5.5-5.5m0 1C14 6 16 8 16 10.5S14 15 11.5 15S7 13 7 10.5S9 6 11.5 6"></svg:path>`,
})
export class MdiLightGenderFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
