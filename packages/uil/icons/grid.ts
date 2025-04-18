import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGridIcon],svg[uil-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4v-4h7Zm0-6H4v-4h7Zm9 6h-7v-4h7Zm0-6h-7v-4h7Zm0-6H4V4h16Z"></svg:path>`,
})
export class UilGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
