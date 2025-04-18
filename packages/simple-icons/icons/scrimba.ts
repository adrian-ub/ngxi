import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsScrimbaIcon],svg[simple-icons-scrimba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 6.222a2.22 2.22 0 0 1-2.222 2.222h-8.89a2.222 2.222 0 0 1 0-4.444h8.89C23.005 4 24 4.995 24 6.222m-7.333 9.334h-8.89a2.222 2.222 0 0 0 0 4.444h8.89a2.222 2.222 0 0 0 0-4.444m0-5.778H13.11a2.222 2.222 0 0 0 0 4.444h3.556a2.222 2.222 0 0 0 0-4.444zM2.222 15.556a2.222 2.222 0 1 0 0 4.444a2.222 2.222 0 0 0 0-4.444"></svg:path>`,
})
export class SimpleIconsScrimbaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
