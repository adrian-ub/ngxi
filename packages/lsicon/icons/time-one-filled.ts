import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeOneFilledIcon],svg[lsicon-time-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m.5 6.793V4h-1v4.207l3.146 3.147l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
