import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity6Icon],svg[tdesign-city-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v6H1v14h22V6h-5zm0 6h3v12h-3zm-2 12h-3v-5h-2v5H8V4h8zM6 20H3V10h3z"></svg:path>`,
})
export class TdesignCity6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
