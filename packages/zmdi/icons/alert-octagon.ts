import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertOctagonIcon],svg[zmdi-alert-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m272 0l112 112v160L272 384H112L0 272V112L112 0zm-80 305q12 0 20-8t8-19.5t-8-19.5t-20-8t-20 8t-8 19.5t8 19.5t20 8m21-92V85h-42v128z"></svg:path>`,
})
export class ZmdiAlertOctagonIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
