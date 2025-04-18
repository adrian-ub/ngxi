import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArchiveIcon],svg[la-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h1v16h22V11h1V5zm2 2h20v2H6zm1 4h18v14H7zm5.813 2c-.551.05-.958.543-.907 1.094c.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496z"></svg:path>`,
})
export class LaArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
