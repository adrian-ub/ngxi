import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCopy28RegularIcon],svg[fluent-copy-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2A2.75 2.75 0 0 0 7.5 4.75v16a2.75 2.75 0 0 0 2.75 2.75h10A2.75 2.75 0 0 0 23 20.75v-16A2.75 2.75 0 0 0 20.25 2zM9 4.75c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v16c0 .69-.56 1.25-1.25 1.25h-10C9.56 22 9 21.44 9 20.75zm-2.5.05A2.75 2.75 0 0 0 5 7.25v13.5C5 23.65 7.35 26 10.25 26h7.5a2.75 2.75 0 0 0 2.45-1.5h-9.95a3.75 3.75 0 0 1-3.75-3.75z"></svg:path>`,
})
export class FluentCopy28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
