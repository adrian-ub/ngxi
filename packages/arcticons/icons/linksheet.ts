import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinksheetIcon],svg[arcticons-linksheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.253 23.954l14.475.037m-11.096 8.69h-6.96a8.681 8.681 0 1 1 0-17.362h6.644m8.034 0h6.96a8.681 8.681 0 1 1 0 17.362h-6.645"></svg:path>`,
})
export class ArcticonsLinksheetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
