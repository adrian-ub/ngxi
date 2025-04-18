import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPauseLargeFillIcon],svg[ri-pause-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v18H6zm10 0h2v18h-2z"></svg:path>`,
})
export class RiPauseLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
