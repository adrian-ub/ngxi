import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartCircleOutlineIcon],svg[teenyicons-heart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m6.5 5.5l1 1l1-1a1.414 1.414 0 0 1 2 2l-3 3l-3-3a1.414 1.414 0 0 1 2-2Z"></svg:path><svg:path d="M.5 7.5a7 7 0 1 0 14 0a7 7 0 0 0-14 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsHeartCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
