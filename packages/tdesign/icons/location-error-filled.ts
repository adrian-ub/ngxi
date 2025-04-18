import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLocationErrorFilledIcon],svg[tdesign-location-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 21.811a28 28 0 0 1-2.853-2.699C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-2.853 2.7c-.607.499-1.238.957-1.885 1.402a27 27 0 0 1-1.886-1.403m3.3-11.311l2.12-2.121l-1.414-1.415L12 9.086L9.879 6.964L8.464 8.38l2.122 2.121l-2.122 2.121l1.415 1.415L12 11.914l2.121 2.122l1.415-1.415z"></svg:path>`,
})
export class TdesignLocationErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
