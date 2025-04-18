import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContractUpRight28FilledIcon],svg[fluent-contract-up-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25h-4.5a.75.75 0 0 1 0-1.5h4.5a2.25 2.25 0 0 0 2.25-2.25V14h-6.75A2.75 2.75 0 0 1 14 11.25V4.5H6.75A2.25 2.25 0 0 0 4.5 6.75v4.5a.75.75 0 0 1-1.5 0zm.75 9.75a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-6.69l-7.22 7.22a.75.75 0 0 1-1.06-1.06l7.22-7.22z"></svg:path>`,
})
export class FluentContractUpRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
