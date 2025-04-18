import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLogFilledIcon],svg[tdesign-system-log-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v6h20V2zm2 2h2.004v2.004H4zm-2 6v12h20V10zm3 3h14v2H5zm0 4h6v2H5z"></svg:path>`,
})
export class TdesignSystemLogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
