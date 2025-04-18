import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsQuestionDuotoneLineIcon],svg[lets-icons-question-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25" stroke-width="1.2"></svg:circle><svg:circle cx="12" cy="18" r=".6" fill="currentColor" stroke-width=".2"></svg:circle><svg:path stroke-width="1.2" d="M12 16v-.857c0-.714.357-1.381.951-1.777l.599-.4a3.26 3.26 0 0 0 1.45-2.71V10a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class LetsIconsQuestionDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
