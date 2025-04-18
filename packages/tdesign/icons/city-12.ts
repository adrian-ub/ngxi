import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity12Icon],svg[tdesign-city-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H2v20h20V5h-8v5h-4zM8 12h8v8h-3v-5h-2v5H8zm-2 8H4V4h4v6H6zm12 0V10h-2V7h4v13z"></svg:path>`,
})
export class TdesignCity12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
