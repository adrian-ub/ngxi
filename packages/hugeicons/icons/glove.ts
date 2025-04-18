import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGloveIcon],svg[hugeicons-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.282 21h-1.08c-1.937 0-2.905 0-3.738-.422c-.833-.423-1.414-1.208-2.576-2.778l-2.474-3.343a2.12 2.12 0 0 1 .193-2.745a2.054 2.054 0 0 1 3.122.225L8.256 14V9.42c0-.39 0-.585.009-.75c.166-3.054 2.571-5.493 5.584-5.66c.163-.01.356-.01.741-.01c.447 0 .67 0 .85.011c3.364.208 5.878 3.216 5.527 6.614c-.018.181-.055.405-.129.851l-.772 4.7c-.388 2.357-.582 3.535-1.25 4.361a4 4 0 0 1-1.083.93c-.914.533-2.093.533-4.45.533M19 17h-7" color="currentColor"></svg:path>`,
})
export class HugeiconsGloveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
