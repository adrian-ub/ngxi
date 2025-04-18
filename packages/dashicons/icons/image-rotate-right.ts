import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImageRotateRightIcon],svg[dashicons-image-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.95 5H14l3.2 3.39L19.82 5h-1.78c0-2.89-1.89-5-5.04-5v2.1c2.1 0 2.95 1.16 2.95 2.9M1 1h10v9h9v10H6v-5H1zm2 2v10h3v-3h3V3zm5 9v6h10v-6z"></svg:path>`,
})
export class DashiconsImageRotateRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
