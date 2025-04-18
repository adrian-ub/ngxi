import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightnessFilledIcon],svg[tdesign-brightness-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.49 3.575L12 .085l-3.49 3.49H3.577V8.51L.086 12l3.49 3.49v4.934H8.51l3.49 3.49l3.489-3.49h4.935V15.49l3.49-3.49l-3.49-3.49V3.575zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class TdesignBrightnessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
