import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude28FilledIcon],svg[fluent-table-simple-exclude-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2H11v9H2V5.75A3.75 3.75 0 0 1 5.75 2M2 12.5v5.25a3.75 3.75 0 0 0 3.75 3.75H11v-9zM21.5 11V5.75A3.75 3.75 0 0 0 17.75 2H12.5v9zM14 16.75A2.75 2.75 0 0 1 16.75 14h6.5A2.75 2.75 0 0 1 26 16.75v6.5A2.75 2.75 0 0 1 23.25 26h-6.5A2.75 2.75 0 0 1 14 23.25z"></svg:path>`,
})
export class FluentTableSimpleExclude28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
