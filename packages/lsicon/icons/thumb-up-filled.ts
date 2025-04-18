import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbUpFilledIcon],svg[lsicon-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.539 2a.5.5 0 0 0-.447.276L5.5 5.46V14h6.289a2.5 2.5 0 0 0 2.47-2.113l.647-4.124a1.5 1.5 0 0 0-1.482-1.732h-3.303l.152-1.22A2.5 2.5 0 0 0 7.793 2zM4.5 14V6.031h-2a.5.5 0 0 0-.5.5V13.5a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
