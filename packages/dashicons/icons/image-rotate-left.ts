import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImageRotateLeftIcon],svg[dashicons-image-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5H5.05c0-1.74.85-2.9 2.95-2.9V0C4.85 0 2.96 2.11 2.96 5H1.18L3.8 8.39zm13-4v14h-5v5H1V10h9V1zm-2 2h-6v7h3v3h3zm-5 9H3v6h10z"></svg:path>`,
})
export class DashiconsImageRotateLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
