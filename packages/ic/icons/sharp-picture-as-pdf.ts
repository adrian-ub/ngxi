import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPictureAsPdfIcon],svg[ic-sharp-picture-as-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H6v16h16zm-10.5 9H9v2H7.5V7h4zm5 .5c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v16h16v-2H4zm10 5.5h1v-3h-1z"></svg:path>`,
})
export class IcSharpPictureAsPdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
