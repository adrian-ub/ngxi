import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPhonePortraitSharpIcon],svg[famicons-phone-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M148 448V64h216v384Z"></svg:path>`,
})
export class FamiconsPhonePortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
