import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff20FilledIcon],svg[fluent-flag-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 1 0V13h7.293l4.853 4.854a.5.5 0 0 0 .708-.708zM16.5 13h-1.379l-10-10H16.5a.5.5 0 0 1 .416.777L14.101 8l2.815 4.223A.5.5 0 0 1 16.5 13"></svg:path>`,
})
export class FluentFlagOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
