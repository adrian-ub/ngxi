import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPetsIcon],svg[ic-round-pets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4.5" cy="9.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="9" cy="5.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="5.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="9.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91c-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32c-.87 1.02-1.6 1.89-2.48 2.91c-1.31 1.31-2.92 2.76-2.62 4.79c.29 1.02 1.02 2.03 2.33 2.32c.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44c1.31-.29 2.04-1.31 2.33-2.32c.31-2.04-1.3-3.49-2.61-4.8"></svg:path>`,
})
export class IcRoundPetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
