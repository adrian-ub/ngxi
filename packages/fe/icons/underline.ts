import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feUnderlineIcon],svg[fe-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 21H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m1-17v7a6 6 0 1 1-12 0V4a1 1 0 1 1 2 0v7c0 2.21 1.79 4 4 4s4-1.79 4-4V4a1 1 0 0 1 2 0"></svg:path>`,
})
export class FeUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
