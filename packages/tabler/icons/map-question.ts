import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapQuestionIcon],svg[tabler-map-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 20l-6-3l-6 3V7l6-3l6 3l6-3v7.5M9 4v13m6-10v5.5m4 9.5v.01"></svg:path><svg:path d="M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerMapQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
