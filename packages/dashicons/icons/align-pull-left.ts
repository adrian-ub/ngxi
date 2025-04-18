import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAlignPullLeftIcon],svg[dashicons-align-pull-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16V4H3v12zm2-7h6V7h-6zm0 4h6v-2h-6z"></svg:path>`,
})
export class DashiconsAlignPullLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
