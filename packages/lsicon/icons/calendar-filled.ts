import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCalendarFilledIcon],svg[lsicon-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2v1H2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H11V2h-1v1H6V2zM3 4h2v1h1V4h4v1h1V4h2v2H3zm1.5 4.5v1h1v-1zm3 0v1h1v-1zm3 1v-1h1v1zm-6 1v1h1v-1zm3 1v-1h1v1zm3-1v1h1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCalendarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
