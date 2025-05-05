import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDownwardIcon],svg[picon-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h2v3h2L4 7L1 4"></svg:path>`,
})
export class PiconDownwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
