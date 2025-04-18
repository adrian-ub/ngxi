import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpClassIcon],svg[ic-sharp-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z"></svg:path>`,
})
export class IcSharpClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
