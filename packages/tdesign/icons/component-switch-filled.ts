import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentSwitchFilledIcon],svg[tdesign-component-switch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.743 8.5A5.48 5.48 0 0 1 13 12c0 1.33-.472 2.55-1.257 3.5H16.5a3.5 3.5 0 1 0 0-7zM2 12a5.5 5.5 0 0 1 5.5-5.5h9a5.5 5.5 0 1 1 0 11h-9A5.5 5.5 0 0 1 2 12"></svg:path>`,
})
export class TdesignComponentSwitchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
