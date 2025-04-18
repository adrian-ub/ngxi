import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbUpOutlineIcon],svg[lsicon-thumb-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.523 6.531H2.5V13.5h3.023zm0 0l.059 6.969h6.207a2 2 0 0 0 1.976-1.69l.647-4.124a1 1 0 0 0-.988-1.155h-3.87l.223-1.783A2 2 0 0 0 7.793 2.5h-.254z"></svg:path>`,
})
export class LsiconThumbUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
