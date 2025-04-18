import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsBankIcon],svg[dashicons-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L3 6v1h14V6zM5 8l-.2 7h2.5L7 8zm4 0l-.2 7h2.5L11 8zm4 0l-.2 7h2.5L15 8zM3 18h14v-2H3z"></svg:path>`,
})
export class DashiconsBankIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
