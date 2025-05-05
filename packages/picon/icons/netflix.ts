import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNetflixIcon],svg[picon-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h2l4 8l-2-.5m-2 0L1 8V1l2 4m4 2L5 3V0h2"></svg:path>`,
})
export class PiconNetflixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
