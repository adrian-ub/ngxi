import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTargetOutlineIcon],svg[teenyicons-target-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M.5 7.5a7 7 0 1 0 14 0a7 7 0 0 0-14 0Z"></svg:path><svg:path d="M3.5 7.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"></svg:path><svg:path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsTargetOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
