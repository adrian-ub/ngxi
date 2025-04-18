import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHamburgerIcon],svg[whh-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 448H64q-26 0-45-18.5T0 384t19-45.5T64 320h896q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5m-64-192H128q-27 0-45.5-18.5T64 192q0-82 121-137T512 0t327 55t121 137q0 27-19 45.5T896 256M64 512h896q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-26 0-45-19T0 575.5t18.5-45T64 512m64 192h768q26 0 45 18.5t19 45.5q0 46-72 55t-376 9t-376-9t-72-55q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhHamburgerIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
