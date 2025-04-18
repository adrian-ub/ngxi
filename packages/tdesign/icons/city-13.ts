import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity13Icon],svg[tdesign-city-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h1v4H1v14h22V8h-6V4h1zm-3 2v16h-2v-5h-2v5H9V4zM7 20H3V10h4zm10 0V10h4v10zM13.004 5.998H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity13Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
