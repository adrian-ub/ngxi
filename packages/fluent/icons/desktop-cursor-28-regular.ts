import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor28RegularIcon],svg[fluent-desktop-cursor-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.999 18.752c0 .67-.293 1.273-.758 1.685l-1.005-1.114a.75.75 0 0 0 .263-.57V5.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v13.502c0 .415.336.75.75.75l11.753-.001v1.501H11.5V23.5h4.501V25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3h19.499a2.25 2.25 0 0 1 2.25 2.25zm-8.512-4.702a.75.75 0 0 1 .826.198l7.705 8.544a.75.75 0 0 1-.737 1.23l-4.39-1.09l-2.519 3.742a.75.75 0 0 1-1.372-.42l.006-11.504a.75.75 0 0 1 .48-.7"></svg:path>`,
})
export class FluentDesktopCursor28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
