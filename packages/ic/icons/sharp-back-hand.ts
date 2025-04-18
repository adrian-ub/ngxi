import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBackHandIcon],svg[ic-sharp-back-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.21 10.47L5 9.36L7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02z"></svg:path>`,
})
export class IcSharpBackHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
