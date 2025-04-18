import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPortraitLineIcon],svg[clarity-portrait-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.34 26.45a.8.8 0 0 0-1.13 0a.79.79 0 0 0 0 1.13L18 31.09l3.74-3.47a.79.79 0 0 0 .05-1.13a.8.8 0 0 0-1.13 0l-1.86 1.68V7.83l1.86 1.72a.8.8 0 1 0 1.08-1.17L18 4.91l-3.74 3.47a.79.79 0 0 0 0 1.13a.8.8 0 0 0 1.13 0l1.81-1.68v20.34Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 30H8V4h20Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPortraitLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
