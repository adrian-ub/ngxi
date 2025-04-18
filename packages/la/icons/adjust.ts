import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAdjustIcon],svg[la-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2v20c-5.535 0-10-4.465-10-10S10.465 6 16 6"></svg:path>`,
})
export class LaAdjustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
