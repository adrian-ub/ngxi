import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextArrowDownRightColumn28FilledIcon],svg[fluent-text-arrow-down-right-column-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 4.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM16 7.75A2.75 2.75 0 0 1 18.75 5h3.5A2.75 2.75 0 0 1 25 7.75v3.75h-9zM16 13v5h9v-5zm9 6.5h-9v3.75A2.75 2.75 0 0 0 18.75 26h3.5A2.75 2.75 0 0 0 25 23.25zM3.75 12a.75.75 0 0 1 .75.75v3A2.25 2.25 0 0 0 6.75 18h3.69l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l2.22-2.22H6.75A3.75 3.75 0 0 1 3 15.75v-3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextArrowDownRightColumn28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
