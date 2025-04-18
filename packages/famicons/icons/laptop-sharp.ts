import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLaptopSharpIcon],svg[famicons-laptop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32Z"></svg:path>`,
})
export class FamiconsLaptopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
