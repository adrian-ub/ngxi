import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseIcon],svg[carbon-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m2-12l-.001 12H16V16zM17 2l1.41 1.41L15.83 6H21a7.01 7.01 0 0 1 7 7v5h-2v-5a5.006 5.006 0 0 0-5-5h-5.17l2.58 2.59L17 12l-5-5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
