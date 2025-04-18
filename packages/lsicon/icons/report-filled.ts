import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconReportFilledIcon],svg[lsicon-report-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1.045a.5.5 0 0 0-.5.5v10.91a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5.364a.5.5 0 0 0-.152-.36L7.911 1.188a.5.5 0 0 0-.348-.142zm7.766 3.819L8.063 2.727v2.137zM6 5.5H4v-1h2zM10 8H4V7h6zm-6 2.5h6v-1H4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 7.5V14H4.5v1h9a.5.5 0 0 0 .5-.5v-7z"></svg:path>`,
})
export class LsiconReportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
