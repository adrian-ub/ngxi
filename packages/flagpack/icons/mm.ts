import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMmIcon],svg[flagpack-mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#E31D1C" d="M0 16h32v8H0z"></svg:path><svg:path fill="#5EAA22" d="M0 8h32v8H0z"></svg:path><svg:path fill="#FFD018" d="M0 0h32v8H0z"></svg:path><svg:path fill="#F7FCFF" d="m16.062 15.976l-5.15 3.274l1.727-5.733l-3.674-3.745l5.065-.11l2.241-5.66l2.042 5.734l5.053.088l-3.797 3.814l1.773 5.454z"></svg:path></svg:g>`,
})
export class FlagpackMmIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
