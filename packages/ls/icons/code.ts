import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCodeIcon],svg[ls-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m159 345l172 173l-83 80L0 350L254 96l79 78zm450 4L437 176l83-80l248 248l-254 254l-79-78z"></svg:path>`,
})
export class LsCodeIcon {
  readonly viewBox = input("0 0 768 614")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
