import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataShareIcon],svg[carbon-data-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 25v-9.172l-3.586 3.586L0 18l6-6l6 6l-1.414 1.414L7 15.828V25h12v2H7a2 2 0 0 1-2-2m19-3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m4 6v-4h-4.001L24 28zM27 6v9.172l3.586-3.586L32 13l-6 6l-6-6l1.414-1.414L25 15.172V6H13V4h12a2 2 0 0 1 2 2M2 6h6v2H2zm0-4h8v2H2z"></svg:path>`,
})
export class CarbonDataShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
