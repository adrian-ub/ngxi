import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPublishOffIcon],svg[mdi-publish-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L15 16.9V20H9v-6H5l3.6-3.6L1.1 3l1.3-1.3l19.7 19.7zM19 6V4H7.2l2 2zm-1.8 8H19l-7-7l-.9.9z"></svg:path>`,
})
export class MdiPublishOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
