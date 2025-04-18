import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRightOutlineIcon],svg[lsicon-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 4.5L9.5 8L6 11.5"></svg:path>`,
})
export class LsiconRightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
