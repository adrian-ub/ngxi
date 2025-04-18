import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCircleIcon],svg[codicon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2.61-4a2.61 2.61 0 1 1-5.22 0a2.61 2.61 0 0 1 5.22 0M8 5.246" clip-rule="evenodd"></svg:path>`,
})
export class CodiconCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
