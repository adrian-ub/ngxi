import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVerticalFilledIcon],svg[tdesign-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h16v6H2zm0 8h16v12H2zm20-8v20h-2V2z"></svg:path>`,
})
export class TdesignVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
