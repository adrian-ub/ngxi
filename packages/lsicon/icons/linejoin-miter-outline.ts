import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinMiterOutlineIcon],svg[lsicon-linejoin-miter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 2.5h-11V8H8v5.5h5.5z"></svg:path>`,
})
export class LsiconLinejoinMiterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
