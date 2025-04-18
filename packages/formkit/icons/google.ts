import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitGoogleIcon],svg[formkit-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.14 8.33v-2.6h6.69c.1.44.18.85.18 1.44c0 4-2.74 6.84-6.86 6.84S0 10.86 0 7s3.2-7 7.14-7c1.93 0 3.54.69 4.78 1.83L9.89 3.76c-.51-.48-1.41-1.04-2.75-1.04c-2.36 0-4.29 1.93-4.29 4.28s1.93 4.28 4.29 4.28c2.74 0 3.74-1.86 3.93-2.95H7.13Z"></svg:path>`,
})
export class FormkitGoogleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
