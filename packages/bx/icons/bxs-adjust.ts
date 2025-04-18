import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsAdjustIcon],svg[bx-bxs-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10s10-4.58 10-10S17.421 2 12 2zm0 17V5c3.829 0 7 3.169 7 7c0 3.828-3.171 7-7 7z" fill="currentColor"></svg:path>`,
})
export class BxBxsAdjustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
