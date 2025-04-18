import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSkipPreviousIcon],svg[ic-sharp-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></svg:path>`,
})
export class IcSharpSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
