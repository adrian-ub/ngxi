import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFlagOutlineIcon],svg[lsicon-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3.5 10.5h10l-2.5-4l2.5-4h-10zm0 0V15"></svg:path>`,
})
export class LsiconFlagOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
