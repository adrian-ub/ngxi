import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTradingviewIcon],svg[simple-icons-tradingview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.865 8.279a2.452 2.452 0 1 1-4.904 0a2.452 2.452 0 0 1 4.904 0M9.75 6H0v4.904h4.846v7.269H9.75Zm8.596 0H24l-5.106 12.173H13.24z"></svg:path>`,
})
export class SimpleIconsTradingviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
