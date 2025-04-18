import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDotFill16Icon],svg[octicon-dot-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path>`,
})
export class OcticonDotFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
