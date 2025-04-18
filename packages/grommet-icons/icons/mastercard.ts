import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsMastercardIcon],svg[grommet-icons-mastercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="7" cy="12" r="7"></svg:circle><svg:circle cx="17" cy="12" r="7" fill-opacity=".8"></svg:circle></svg:g>`,
})
export class GrommetIconsMastercardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
