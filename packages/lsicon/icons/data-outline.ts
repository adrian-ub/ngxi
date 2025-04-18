import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDataOutlineIcon],svg[lsicon-data-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 2.5h3v11h-3zm-8 0h6v2h-6zm0 4.5h6v2h-6zm0 4.5h6v2h-6z"></svg:path>`,
})
export class LsiconDataOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
