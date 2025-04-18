import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHorizontalFilledIcon],svg[tdesign-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v6H2zm0 8h20v12H2z"></svg:path>`,
})
export class TdesignHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
