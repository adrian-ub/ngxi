import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPropaneIcon],svg[ic-sharp-propane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82A6 6 0 0 0 7 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6M10 5h4v1h-4z"></svg:path>`,
})
export class IcSharpPropaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
