import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRedhatIcon],svg[grommet-icons-redhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.832 6.125Q6.8 2.52 8.492 3.24c1.691.722 2.416.481 3.141 0q.726-.48 2.175 0l3.384 1.443q1.45.48 1.934 3.366q.483 2.884.725 3.846q3.625 1.443 4.109 4.328c.483 2.885-3.384 5.77-11.36 4.327S-.452 14.54.032 11.895q.483-2.644 4.592-2.644z"></svg:path><svg:path d="M4.887 8.538q2.193 3.76 8.04 4.7t6.82-1.88q.417 2.126 0 2.82c-.914 1.527-3.411 1.969-6.09 1.646q-5.846-.706-8.526-3.76q-.73-.94-.731-1.646q0-.705.487-1.88"></svg:path></svg:g>`,
})
export class GrommetIconsRedhatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
