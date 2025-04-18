import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartSmallOutlineIcon],svg[teenyicons-heart-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m6.5 5.5l1 1l1-1a1.414 1.414 0 1 1 2 2l-3 3l-3-3a1.414 1.414 0 1 1 2-2Z"></svg:path>`,
})
export class TeenyiconsHeartSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
