import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSubdirectoryRightIcon],svg[bx-subdirectory-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13H8V5H6v9a1 1 0 0 0 1 1h7v3l5-4l-5-4z"></svg:path>`,
})
export class BxSubdirectoryRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
