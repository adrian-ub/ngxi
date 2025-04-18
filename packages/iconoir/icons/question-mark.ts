import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirQuestionMarkIcon],svg[iconoir-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0c0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011"></svg:path>`,
})
export class IconoirQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
