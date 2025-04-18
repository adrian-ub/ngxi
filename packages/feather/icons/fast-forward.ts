import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherFastForwardIcon],svg[feather-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l9-7l-9-7zM2 19l9-7l-9-7z"></svg:path>`,
})
export class FeatherFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
