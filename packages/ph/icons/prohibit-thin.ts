import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitThinIcon],svg[ph-prohibit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.67 91.67 0 0 1-24.21 62.13L65.87 60.21A92 92 0 0 1 220 128m-184 0a91.67 91.67 0 0 1 24.21-62.13l129.92 129.92A92 92 0 0 1 36 128"></svg:path>`,
})
export class PhProhibitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
