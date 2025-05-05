import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCopyFilledIcon],svg[tdesign-file-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v16h11v2H2V5z"></svg:path><svg:path fill="currentColor" d="M6 1h10l5 5v13H6zm9 2v4h4z"></svg:path>`,
})
export class TdesignFileCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
