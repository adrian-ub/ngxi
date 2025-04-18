import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFlowDiagonalUpRight48FilledIcon],svg[fluent-arrow-flow-diagonal-up-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.75 24c-.69 0-1.25-.56-1.25-1.25V12.268L20.472 29.296a8 8 0 1 1-1.768-1.768L35.733 10.5H25.25a1.25 1.25 0 1 1 0-2.5h13.5c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25"></svg:path>`,
})
export class FluentArrowFlowDiagonalUpRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
