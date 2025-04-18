import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemStorageIcon],svg[tdesign-system-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4v3.625H11V4zM13 4v5.625H6.5V4H4v16h16V9.04L14.96 4zm2.79-2L22 8.212v13.79H2V2zM7 14v-2h10v2zm0 3v-2h6v2z"></svg:path>`,
})
export class TdesignSystemStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
