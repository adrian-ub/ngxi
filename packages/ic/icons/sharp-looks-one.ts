import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLooksOneIcon],svg[ic-sharp-looks-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-7 14h-2V9h-2V7h4z"></svg:path>`,
})
export class IcSharpLooksOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
