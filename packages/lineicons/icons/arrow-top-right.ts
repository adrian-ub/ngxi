import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowTopRightIcon],svg[lineicons-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 51.3c-.6 0-1.2-.2-1.6-.7c-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6"></svg:path>`,
})
export class LineiconsArrowTopRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
