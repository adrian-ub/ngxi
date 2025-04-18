import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPercentageIcon],svg[codicon-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.61 12.688l8-10l.78.624l-8 10zM4.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPercentageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
