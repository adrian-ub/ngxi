import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPostcardIcon],svg[uil-postcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1M6 12h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2m16-8H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H3V6h18ZM6 16h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilPostcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
