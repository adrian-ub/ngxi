import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDownIcon],svg[ls-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m356 357l246-246l115 119l-355 354L0 222l112-113z"></svg:path>`,
})
export class LsDownIcon {
  readonly viewBox = input("0 0 717 614")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
