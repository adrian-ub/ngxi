import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinQuestionIcon],svg[tabler-map-pin-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M14.997 19.317L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243A8 8 0 1 1 20 11.073M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerMapPinQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
