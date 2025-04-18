import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faModxIcon],svg[fa-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1395 709L781 323l92-151h855zM373 974L189 858V0l1183 743zm1019-135l147 95v858l-532-335zm-37-21l-500 802H0l356-571z"></svg:path>`,
})
export class FaModxIcon {
  readonly viewBox = input("0 0 1728 1792")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
