import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAlignNoneIcon],svg[dashicons-align-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h14V3H3zm10 8V7H3v6zM3 17h14v-2H3z"></svg:path>`,
})
export class DashiconsAlignNoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
