import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsQuestionCircleLineIcon],svg[majesticons-question-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M12 12a2 2 0 1 0-2-2m2 5h.01"></svg:path></svg:g>`,
})
export class MajesticonsQuestionCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
