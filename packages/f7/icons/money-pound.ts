import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyPoundIcon],svg[f7-money-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.102 40.382H40.02v4.207H16.067V40.54c4.007-.614 5.966-3.844 5.966-7.505c0-.932-.178-1.956-.423-3.047H16v-3.275h4.83c-.31-1.433-.578-2.888-.578-4.321c0-6.345 4.43-10.393 11.443-10.393c2.96 0 5.587.569 6.767 1.137v4.185c-1.38-.614-3.584-1.07-6.166-1.07c-4.408 0-7.057 2.48-7.057 6.186c0 1.66.267 3.002.578 4.276H36.37v3.275h-9.773c.155.864.267 1.796.267 2.842c0 3.57-1.425 6.368-3.762 7.437z"></svg:path>`,
})
export class F7MoneyPoundIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
