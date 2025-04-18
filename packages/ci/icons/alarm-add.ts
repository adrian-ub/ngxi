import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciAlarmAddIcon],svg[ci-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9.121 9.121 0 0 1-9-9a9.121 9.121 0 0 1 9-9a9.121 9.121 0 0 1 9 9a9.121 9.121 0 0 1-9 9Zm0-16a7.094 7.094 0 0 0-7 7a7.094 7.094 0 0 0 7 7a7.094 7.094 0 0 0 7-7a7.094 7.094 0 0 0-7-7Zm1 12h-2v-4H7v-2h4V8h2v4h4v2h-4v4Zm7.292-11.292l-3.009-3l1.409-1.417l3.01 3l-1.41 1.416v.001Zm-16.583 0L2.292 5.291l2.991-3l1.415 1.416l-2.989 3v.001Z"></svg:path>`,
})
export class CiAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
