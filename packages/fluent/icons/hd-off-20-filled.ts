import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHdOff20FilledIcon],svg[fluent-hd-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.148 2.148a.5.5 0 0 0 0 .708l1.407 1.406A2.98 2.98 0 0 0 3 6v8a3 3 0 0 0 3 3h8a2.98 2.98 0 0 0 1.738-.555l1.406 1.407a.5.5 0 1 0 .708-.708L2.856 2.148a.5.5 0 0 0-.708 0M12.293 13H11a.5.5 0 0 1-.5-.5v-1.293zM9.5 10.207V12.5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0V10h2.5v-.793zm2-.824l2.093 2.093c.253-.28.407-.652.407-1.06v-.833C14 8.71 13.29 8 12.416 8H11.5zm3.5 1.034c0 .683-.266 1.305-.699 1.767l2.596 2.596Q17 14.406 17 14V6a3 3 0 0 0-3-3H6q-.406.002-.78.102l5.28 5.28V7.5A.5.5 0 0 1 11 7h1.416A2.583 2.583 0 0 1 15 9.583z"></svg:path>`,
})
export class FluentHdOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
