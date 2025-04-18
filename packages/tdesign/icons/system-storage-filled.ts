import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemStorageFilledIcon],svg[tdesign-system-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.79 2L22 8.212v13.79H2V2zM7 4v5h4V4zm0 9v2h10v-2zm0 3v2h6v-2z"></svg:path>`,
})
export class TdesignSystemStorageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
