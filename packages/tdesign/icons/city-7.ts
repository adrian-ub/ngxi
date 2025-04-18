import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity7Icon],svg[tdesign-city-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20V10h-8zm-2 8H8v10H4V4h8zm-2 10v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
