import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomQuestionIcon],svg[tabler-zoom-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6m-5-2v.01"></svg:path><svg:path d="M10 10a1.5 1.5 0 1 0-1.14-2.474"></svg:path></svg:g>`,
})
export class TablerZoomQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
