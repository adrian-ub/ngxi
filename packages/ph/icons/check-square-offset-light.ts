import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetLightIcon],svg[ph-check-square-offset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v160a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v96a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M115.76 155.76L64 207.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l24 24a6 6 0 0 0 8.48 0l56-56a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhCheckSquareOffsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
