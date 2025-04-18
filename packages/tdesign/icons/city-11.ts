import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity11Icon],svg[tdesign-city-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20v-9.72l-7-2.334l-1 .333zm-2 8.946l-4 1.333V20H4V4h8zM10 20v-6.28l5-1.666l5 1.667V20h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
