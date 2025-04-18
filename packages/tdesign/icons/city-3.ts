import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity3Icon],svg[tdesign-city-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-7v5H9V2H2v20h20zM9 9h6v11h-2v-4h-2v4H9zM7 20H4V4h3zm10 0V4h3v16zm-3-9h-4v2h4z"></svg:path>`,
})
export class TdesignCity3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
