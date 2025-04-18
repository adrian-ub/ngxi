import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDownOutlineIcon],svg[lsicon-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6L8 9.5L11.5 6"></svg:path>`,
})
export class LsiconDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
