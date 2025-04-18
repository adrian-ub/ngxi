import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderClearIcon],svg[uil-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1M4 3a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m16-6a1 1 0 1 0-1-1a1 1 0 0 0 1 1M4 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m12 12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
