import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximizeVertical24FilledIcon],svg[fluent-arrow-maximize-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.207 6.207a1 1 0 0 1-1.414 0L13 5.414V9a1 1 0 1 1-2 0V5.414l-.793.793a1 1 0 0 1-1.414-1.414l2.5-2.5A1 1 0 0 1 11.997 2h.006a1 1 0 0 1 .704.293l2.5 2.5a1 1 0 0 1 0 1.414M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm7.01 11a1 1 0 0 0 .697-.293l2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V15a1 1 0 1 0-2 0v3.586l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 .698.293"></svg:path>`,
})
export class FluentArrowMaximizeVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
