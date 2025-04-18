import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleLeftLineIcon],svg[majesticons-arrow-circle-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-3.707 9.293l3-3a1 1 0 1 1 1.414 1.414L11.414 11H15a1 1 0 1 1 0 2h-3.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
