import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCodeFilledIcon],svg[tdesign-system-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h22zm-9.414 10.5l2.5-2.5l-2.5-2.5L15 6.086L18.914 10L15 13.914zM9 13.914L5.086 10L9 6.086L10.414 7.5l-2.5 2.5l2.5 2.5zM21 20H3v2h18z"></svg:path>`,
})
export class TdesignSystemCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
