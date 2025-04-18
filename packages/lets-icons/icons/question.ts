import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsQuestionIcon],svg[lets-icons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9" stroke-width="2"></svg:circle><svg:circle cx="12" cy="18" r=".5" fill="currentColor"></svg:circle><svg:path stroke-width="2" d="M12 16v-1.419c0-.944.604-1.782 1.5-2.081a2.19 2.19 0 0 0 1.5-2.081v-.513C15 8.3 13.7 7 12.094 7H12a3 3 0 0 0-3 3"></svg:path></svg:g>`,
})
export class LetsIconsQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
