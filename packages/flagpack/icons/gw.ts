import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGwIcon],svg[flagpack-gw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FBCD17" d="M16 0h16v12H16z"></svg:path><svg:path fill="#0B9E7A" d="M16 12h16v12H16z"></svg:path><svg:path fill="#E11C1B" d="M0 0h16v24H0z"></svg:path><svg:path fill="#1D1D1D" d="m8.93 14.606l-3.485 2.418l1.114-4.141L4 10.238l3.465-.143L8.93 6l1.466 4.095h3.458l-2.552 2.788l1.278 3.897z"></svg:path></svg:g>`,
})
export class FlagpackGwIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
