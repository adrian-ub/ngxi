import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFastRewindIcon],svg[ic-twotone-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m11 6l-8.5 6l8.5 6zm-2 8.14L5.97 12L9 9.86zM20 6l-8.5 6l8.5 6zm-2 8.14L14.97 12L18 9.86z"></svg:path>`,
})
export class IcTwotoneFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
