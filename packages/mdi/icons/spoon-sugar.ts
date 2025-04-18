import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpoonSugarIcon],svg[mdi-spoon-sugar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13H3v-3h3zm4-3H7v3h3zM8 6H5v3h3zm10 6c-3.75 0-5.72 1.25-7 2H2c0 2.21 1.79 4 4 4h1c1 0 1.92-.37 2.62-1c1.44-1.22 3.06-2.26 4.93-2.64c1.06-.21 2.23-.36 3.45-.36h4v-2z"></svg:path>`,
})
export class MdiSpoonSugarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
