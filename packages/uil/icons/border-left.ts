import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderLeftIcon],svg[uil-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8-8a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m16 2a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-8 2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m12 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
