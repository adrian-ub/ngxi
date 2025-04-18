import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsQuestionLightIcon],svg[lets-icons-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor"></svg:circle><svg:circle cx="12" cy="18" r=".5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" d="M12 16v-.857c0-.714.357-1.381.951-1.777l.599-.4a3.26 3.26 0 0 0 1.45-2.71V10a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class LetsIconsQuestionLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
