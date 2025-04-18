import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPauseLargeLineIcon],svg[ri-pause-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v18H6zm10 0h2v18h-2z"></svg:path>`,
})
export class RiPauseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
