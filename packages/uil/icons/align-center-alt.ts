import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignCenterAltIcon],svg[uil-align-center-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m16 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-2 5H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilAlignCenterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
