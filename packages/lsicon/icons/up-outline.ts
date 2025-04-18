import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUpOutlineIcon],svg[lsicon-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 9.5L8 6l3.5 3.5"></svg:path>`,
})
export class LsiconUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
