import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderRightIcon],svg[uil-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m12-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m-4 16a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-4-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
