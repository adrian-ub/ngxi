import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightness1FilledIcon],svg[tdesign-brightness-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.49 3.575L12 .085l-3.49 3.49H3.577V8.51L.086 12l3.49 3.49v4.934H8.51l3.49 3.49l3.489-3.49h4.935V15.49l3.49-3.49l-3.49-3.49V3.575zM12 17c-.63 0-1.232-.116-1.787-.33A6.97 6.97 0 0 0 11.999 12a6.97 6.97 0 0 0-1.786-4.67A5 5 0 1 1 12 17"></svg:path>`,
})
export class TdesignBrightness1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
