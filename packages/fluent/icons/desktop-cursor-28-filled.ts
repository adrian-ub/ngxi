import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor28FilledIcon],svg[fluent-desktop-cursor-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502c0 .67-.293 1.273-.758 1.685l-6.186-6.859a1.75 1.75 0 0 0-3.05 1.172l-.002 6.252H11.5V23.5h4.501V25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3zm-6.262 11.05a.75.75 0 0 1 .826.198l7.705 8.544a.75.75 0 0 1-.737 1.23l-4.39-1.09l-2.519 3.742a.75.75 0 0 1-1.372-.42l.006-11.504a.75.75 0 0 1 .48-.7"></svg:path>`,
})
export class FluentDesktopCursor28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
