import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMinimizeFillIcon],svg[eva-minimize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M13 12H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMinimizeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
