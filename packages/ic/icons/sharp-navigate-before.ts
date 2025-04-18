import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNavigateBeforeIcon],svg[ic-sharp-navigate-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.61 7.41L14.2 6l-6 6l6 6l1.41-1.41L11.03 12z"></svg:path>`,
})
export class IcSharpNavigateBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
