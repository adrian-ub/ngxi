import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHouseOutlineIcon],svg[lsicon-house-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m1 7l7-4.5L15 7m-1.5-1v7.5h-11V6m4 3.5h3v4h-3z"></svg:path>`,
})
export class LsiconHouseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
