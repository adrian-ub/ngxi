import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakFillIcon],svg[ph-link-simple-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-63.44 141.66l-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32m50.55-50.55l-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22"></svg:path>`,
})
export class PhLinkSimpleBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
