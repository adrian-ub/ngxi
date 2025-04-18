import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuFilledIcon],svg[tdesign-menu-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v8H2zm6 2.998H5.996v2.004h2v-.004H8zm10 0h-8v2h8zM2 12h20v10H2z"></svg:path>`,
})
export class TdesignMenuFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
