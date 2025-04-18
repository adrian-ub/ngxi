import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFontFamilyIcon],svg[bx-font-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h7v2h-7zm1 4h6v2h-6zm2 4h4v2h-4zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L10.5 6.515L12.932 13z"></svg:path>`,
})
export class BxFontFamilyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
