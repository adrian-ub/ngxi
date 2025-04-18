import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImageFlipVerticalIcon],svg[dashicons-image-flip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v2h-3v8H3v-8H0V9h3V1h14v8zM6.5 7h7L10 3zM17 9.5H3v1h14zM13.5 13h-7l3.5 4z"></svg:path>`,
})
export class DashiconsImageFlipVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
