import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRootListFilledIcon],svg[tdesign-root-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-4 5.5H6v2h12zm-4 4H6v2h8z"></svg:path>`,
})
export class TdesignRootListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
