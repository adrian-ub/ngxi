import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContractUpRight20FilledIcon],svg[fluent-contract-up-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2v-4h-4a2 2 0 0 1-2-2V4zm-2.5 8a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-3.793l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 12z"></svg:path>`,
})
export class FluentContractUpRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
