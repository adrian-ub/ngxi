import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWebIcon],svg[ic-sharp-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z"></svg:path>`,
})
export class IcSharpWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
