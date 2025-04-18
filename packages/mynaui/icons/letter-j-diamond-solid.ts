import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJDiamondSolidIcon],svg[mynaui-letter-j-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
