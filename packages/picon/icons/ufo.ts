import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUfoIcon],svg[picon-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4c0 3-8 3-8 0l1.5-1C2 0 6 0 6.5 3M2 4q2 1 4 0c0-3-4-3-4 0M1 4v1h1m4 0h1V4M4.5 5L4 4.5l-.5.5l.5.5"></svg:path>`,
})
export class PiconUfoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
