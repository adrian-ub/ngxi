import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFunctionsIcon],svg[ic-sharp-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5l-5-5h7z"></svg:path>`,
})
export class IcSharpFunctionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
