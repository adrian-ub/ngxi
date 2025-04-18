import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRowExpandIcon],svg[carbon-row-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h11v6.172l-2.586-2.586L11 23l5 5l5-5l-1.414-1.414L17 24.172V18h11v-2H4zM26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h20z"></svg:path>`,
})
export class CarbonRowExpandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
