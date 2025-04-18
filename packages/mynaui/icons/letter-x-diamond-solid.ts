import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXDiamondSolidIcon],svg[mynaui-letter-x-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
