import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftOutlineIcon],svg[lsicon-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 4.5L6 8l3.5 3.5"></svg:path>`,
})
export class LsiconLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
