import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsQuestionIcon],svg[zondicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0m-3 8v2h2v-2z"></svg:path>`,
})
export class ZondiconsQuestionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
