import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsOpenSharpIcon],svg[famicons-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m201.37 288l176-176H48v352h352V134.63l-176 176z"></svg:path><svg:path fill="currentColor" d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48z"></svg:path>`,
})
export class FamiconsOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
