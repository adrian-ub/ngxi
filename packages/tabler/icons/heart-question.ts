import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartQuestionIcon],svg[tabler-heart-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.105 17.915L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.524 5.127M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerHeartQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
