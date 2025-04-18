import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsWIcon],svg[ls-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m590 487l156-362h79L591 667L412 261L234 667L0 125h79l156 362L412 82z"></svg:path>`,
})
export class LsWIcon {
  readonly viewBox = input("0 0 825 667")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
