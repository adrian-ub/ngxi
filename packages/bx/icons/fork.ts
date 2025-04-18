import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxForkIcon],svg[bx-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.47 13.77l-1.41-1.42l5.66-5.65l-1.42-1.42l-5.65 5.66l-1.42-1.41l5.66-5.66l-1.42-1.42l-6.36 6.37a3 3 0 0 0 0 4.24l.71.71l-6.37 6.36l1.42 1.42l6.36-6.37l.71.71a3 3 0 0 0 4.24 0l6.37-6.36l-1.42-1.42z"></svg:path>`,
})
export class BxForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
