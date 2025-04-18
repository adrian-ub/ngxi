import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhThissideupIcon],svg[whh-thissideup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T960 1024m-64-768v384q0 27-18.5 45.5T832 704h-64q-26 0-45-18.5T704 640V256H584q-8-8-8-20t8-21L780 9q8-9 19.5-9T819 9l197 206q8 9 8 21t-8 20zm-576 0v384q0 27-18.5 45.5T256 704h-64q-26 0-45-18.5T128 640V256H8q-8-8-8-20t8-21L204 9q9-9 20-9t20 9l196 206q8 9 8 21t-8 20z"></svg:path>`,
})
export class WhhThissideupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
