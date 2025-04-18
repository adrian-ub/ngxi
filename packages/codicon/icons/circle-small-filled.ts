import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCircleSmallFilledIcon],svg[codicon-circle-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class CodiconCircleSmallFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
