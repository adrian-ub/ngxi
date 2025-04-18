import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhonelinkIcon],svg[ic-sharp-phonelink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z"></svg:path>`,
})
export class IcSharpPhonelinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
