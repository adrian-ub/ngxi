import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenExceptionIcon],svg[oui-token-exception-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.461 7.31h3.055a.74.74 0 0 1 .66 1.074l-2.141 4.211a.74.74 0 1 1-1.319-.67L9.31 8.79H6.256a.74.74 0 0 1-.66-1.075l2.19-4.31a.74.74 0 0 1 1.319.67z"></svg:path>`,
})
export class OuiTokenExceptionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
