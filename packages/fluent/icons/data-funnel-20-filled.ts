import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataFunnel20FilledIcon],svg[fluent-data-funnel-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2 6a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2m4 4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4z"></svg:path>`,
})
export class FluentDataFunnel20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
