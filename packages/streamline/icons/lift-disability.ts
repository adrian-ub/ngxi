import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLiftDisabilityIcon],svg[streamline-lift-disability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 2.5l2-2l2 2m-4 3l2 2l2-2M6 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v3h2a1 1 0 0 1 1 1v3M3.5 7.5a3 3 0 1 0 2.83 4"></svg:path>`,
})
export class StreamlineLiftDisabilityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
