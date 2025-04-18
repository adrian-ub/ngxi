import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftDownCircleIcon],svg[tdesign-arrow-left-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 11C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-4.182-6.819V8.524h2v4.243l5.364-5.364l1.414 1.414l-5.364 5.364h4.243v2z"></svg:path>`,
})
export class TdesignArrowLeftDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
