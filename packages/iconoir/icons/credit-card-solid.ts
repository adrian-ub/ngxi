import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardSolidIcon],svg[iconoir-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V9.75H6a.75.75 0 0 1 0-1.5h16.75V7A2.75 2.75 0 0 0 20 4.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
