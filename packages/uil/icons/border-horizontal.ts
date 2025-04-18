import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderHorizontalIcon],svg[uil-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a1 1 0 1 0-1-1a1 1 0 0 0 1 1M4 9a1 1 0 1 0-1-1a1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M4 5a1 1 0 1 0-1-1a1 1 0 0 0 1 1m12 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M4 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1m16 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m-4 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1M4 15a1 1 0 1 0 1 1a1 1 0 0 0-1-1m16-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1M8 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
