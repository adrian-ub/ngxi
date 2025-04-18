import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPhoneLandscapeSharpIcon],svg[famicons-phone-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18m448 234H64V148h384Z"></svg:path>`,
})
export class FamiconsPhoneLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
