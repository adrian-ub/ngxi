import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDownloadIcon],svg[ep-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696l236.288-236.352l45.248 45.248L508.8 704L192 387.2l45.248-45.248L480 584.704V128h64z"></svg:path>`,
})
export class EpDownloadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
