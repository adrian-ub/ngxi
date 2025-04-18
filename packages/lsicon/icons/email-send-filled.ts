import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEmailSendFilledIcon],svg[lsicon-email-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-10v-1H14V4.6L9.777 7.417a.5.5 0 0 1-.554 0L5 4.601V6.5a.5.5 0 0 1-.5.5H1V6h3zM7 8v1H2V8zm1 3H3v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEmailSendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
