import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderInnerIcon],svg[uil-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a1 1 0 1 0-1-1a1 1 0 0 0 1 1M4 9a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 14a1 1 0 1 0 1 1a1 1 0 0 0-1-1M20 5a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 14a1 1 0 1 0 1 1a1 1 0 0 0-1-1M4 15a1 1 0 1 0 1 1a1 1 0 0 0-1-1m16 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m5-7a1 1 0 0 0-1-1h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 1-1M8 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
