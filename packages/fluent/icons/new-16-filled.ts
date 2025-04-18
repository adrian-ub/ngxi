import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNew16FilledIcon],svg[fluent-new-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 10.999h4.5a.75.75 0 0 1 .102 1.493l-.102.007h-4.5a.75.75 0 0 1-.102-1.493zh4.5zm1.47-5.78a.75.75 0 0 1 .976-.072l.084.073l3.5 3.5a.75.75 0 0 1-.976 1.133L8.72 9.78l-3.5-3.5a.75.75 0 0 1 0-1.06M11.75 3a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102L11 8.25v-4.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentNew16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
