import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightGenderMaleIcon],svg[mdi-light-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5v1h3.3L13 10.3C12 9.5 10.8 9 9.5 9C6.5 9 4 11.5 4 14.5S6.5 20 9.5 20s5.5-2.5 5.5-5.5c0-1.3-.5-2.5-1.3-3.5L18 6.7V10h1V5zm-4.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8C14 17 12 19 9.5 19S5 17 5 14.5S7 10 9.5 10"></svg:path>`,
})
export class MdiLightGenderMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
