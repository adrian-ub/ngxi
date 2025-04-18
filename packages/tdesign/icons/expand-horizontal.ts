import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExpandHorizontalIcon],svg[tdesign-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4v16h-2V4zm.586 8L9 7.086L10.414 8.5l-2.5 2.5h8.172l-2.5-2.5L15 7.086L19.914 12L15 16.914L13.586 15.5l2.5-2.5H7.914l2.5 2.5L9 16.914zM22.5 4v16h-2V4z"></svg:path>`,
})
export class TdesignExpandHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
