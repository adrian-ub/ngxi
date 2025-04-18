import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbDownOutlineIcon],svg[lsicon-thumb-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.523 9.469H2.5V2.5h3.023zm0 0L5.582 2.5h6.207a2 2 0 0 1 1.976 1.69l.647 4.124a1 1 0 0 1-.988 1.155h-3.87l.223 1.783A2 2 0 0 1 7.793 13.5h-.254z"></svg:path>`,
})
export class LsiconThumbDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
