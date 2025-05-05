import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBaguetteIcon],svg[picon-baguette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6q-5 4-3-1q3 .5 1-1q4 .5 1-1q3 .5 1-1q6-3 2 2"></svg:path>`,
})
export class PiconBaguetteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
