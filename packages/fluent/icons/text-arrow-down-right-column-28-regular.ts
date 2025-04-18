import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextArrowDownRightColumn28RegularIcon],svg[fluent-text-arrow-down-right-column-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 4.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm16-2.5A2.75 2.75 0 0 0 16 7.75v15.5A2.75 2.75 0 0 0 18.75 26h3.5A2.75 2.75 0 0 0 25 23.25V7.75A2.75 2.75 0 0 0 22.25 5zM17.5 7.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v3.75h-6zm0 5.25h6v5h-6zm6 6.5v3.75c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25V19.5zM3.75 12a.75.75 0 0 1 .75.75v3A2.25 2.25 0 0 0 6.75 18h3.69l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l2.22-2.22H6.75A3.75 3.75 0 0 1 3 15.75v-3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextArrowDownRightColumn28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
