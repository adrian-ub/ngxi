import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsItalicLineIcon],svg[majesticons-italic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h4m4 0h-4m0 0l-4 12m0 0h4m-4 0H6"></svg:path>`,
})
export class MajesticonsItalicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
