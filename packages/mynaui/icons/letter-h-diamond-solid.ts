import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHDiamondSolidIcon],svg[mynaui-letter-h-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
