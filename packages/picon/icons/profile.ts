import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconProfileIcon],svg[picon-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8c-5.5 0-5.5-8 0-8s5.5 8 0 8m3-3Q4 3 1 5c0 3 6 3 6 0M4 0L2 2l2 2l2-2"></svg:path>`,
})
export class PiconProfileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
