import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarFaceIcon],svg[mdi-star-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L8.42 8.06L2 9.74l4.2 5.14l-.38 6.62L12 19.09l6.18 2.41l-.38-6.62L22 9.74l-6.42-1.68zm-2.62 8c.62 0 1.12.5 1.12 1.13a1.12 1.12 0 0 1-1.12 1.12c-.63 0-1.13-.5-1.13-1.12c0-.63.5-1.13 1.13-1.13m5.25 0c.62 0 1.12.5 1.12 1.13a1.12 1.12 0 0 1-1.12 1.12c-.63 0-1.13-.5-1.13-1.12c0-.63.5-1.13 1.13-1.13M9 15h6a3.249 3.249 0 0 1-6 0"></svg:path>`,
})
export class MdiStarFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
