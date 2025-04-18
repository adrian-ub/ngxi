import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCopy28FilledIcon],svg[fluent-copy-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2A2.75 2.75 0 0 0 7.5 4.75v16a2.75 2.75 0 0 0 2.75 2.75h10A2.75 2.75 0 0 0 23 20.75v-16A2.75 2.75 0 0 0 20.25 2zM6.5 4.8A2.75 2.75 0 0 0 5 7.25v13.5C5 23.65 7.35 26 10.25 26h7.5a2.75 2.75 0 0 0 2.45-1.5h-9.95a3.75 3.75 0 0 1-3.75-3.75z"></svg:path>`,
})
export class FluentCopy28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
