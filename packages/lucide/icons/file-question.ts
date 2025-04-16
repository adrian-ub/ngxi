import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileQuestionIcon],svg[lucide-file-question-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></svg:path><svg:path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></svg:path></svg:g>`,
})
export class LucideFileQuestionIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
