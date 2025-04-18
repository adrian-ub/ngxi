import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAlignLeftIcon],svg[dashicons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h14V3H3zm9 8V7H3v6zm2-4h3V7h-3zm0 4h3v-2h-3zM3 17h14v-2H3z"></svg:path>`,
})
export class DashiconsAlignLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
