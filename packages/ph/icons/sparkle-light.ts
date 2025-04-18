import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSparkleLightIcon],svg[ph-sparkle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.89 130.94L144.4 111.6l-19.34-52.49a13.92 13.92 0 0 0-26.12 0L79.6 111.6l-52.49 19.34a13.92 13.92 0 0 0 0 26.12L79.6 176.4l19.34 52.49a13.92 13.92 0 0 0 26.12 0l19.34-52.49l52.49-19.34a13.92 13.92 0 0 0 0-26.12m-4.15 14.86l-55.08 20.3a6 6 0 0 0-3.56 3.56l-20.3 55.08a1.92 1.92 0 0 1-3.6 0l-20.3-55.08a6 6 0 0 0-3.56-3.56l-55.08-20.3a1.92 1.92 0 0 1 0-3.6l55.08-20.3a6 6 0 0 0 3.56-3.56l20.3-55.08a1.92 1.92 0 0 1 3.6 0l20.3 55.08a6 6 0 0 0 3.56 3.56l55.08 20.3a1.92 1.92 0 0 1 0 3.6M146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6m100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSparkleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
