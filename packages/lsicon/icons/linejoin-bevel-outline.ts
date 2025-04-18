import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinBevelOutlineIcon],svg[lsicon-linejoin-bevel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 13.5h5.5V8L8 2.5H2.5V8H8z"></svg:path>`,
})
export class LsiconLinejoinBevelOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
