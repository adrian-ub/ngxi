import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackClIcon],svg[flagpack-cl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#3D58DB" d="M0 0h14v14H0z"></svg:path><svg:path fill="#F7FCFF" d="M14-2h18v16H14z"></svg:path><svg:path fill="#E31D1C" d="M0 14h32v10H0z"></svg:path><svg:path fill="#F7FCFF" d="m7.014 9.783l-3.803 2.272L5.088 8.19L1.764 5.68L5.6 5.639L7.05 2.21l.932 3.428l3.632.017L8.851 8.11l1.434 3.944z"></svg:path></svg:g>`,
})
export class FlagpackClIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
