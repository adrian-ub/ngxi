import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsStrikeIcon],svg[ls-strike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 323h700v62H0zm370-64l64 34H179c-18-27-29-60-29-97C149 80 239 1 387 1c33 0 75 4 116 16c13 4 23 6 35 8c8 23 18 78 18 146c0 0-39 3-40 3c-17-52-61-126-134-126c-68 0-104 44-104 95c0 47 41 89 92 116m73 298c0-66-50-111-102-142h223c11 24 18 52 18 85c0 126-103 207-258 207c-93 0-152-26-173-38c-20-23-33-96-33-166l39-3c20 66 89 160 176 160c75 0 110-52 110-103"></svg:path>`,
})
export class LsStrikeIcon {
  readonly viewBox = input("0 0 700 707")
  readonly width = input("1em")
  readonly height = input("1em")
}
