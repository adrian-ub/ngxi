import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilThIcon],svg[uil-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4v-7h7Zm0-9H4V4h7Zm9 9h-7v-7h7Zm0-9h-7V4h7Z"></svg:path>`,
})
export class UilThIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
