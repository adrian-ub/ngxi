import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCommentAltQuestionIcon],svg[uil-comment-alt-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.29 10.3a1 1 0 0 0 1.09 1.63a1.2 1.2 0 0 0 .33-.22a1 1 0 0 0 .21-.32A.85.85 0 0 0 8 11a1 1 0 0 0-.29-.7a1 1 0 0 0-1.42 0M7 5a1 1 0 0 1 0 2a1 1 0 0 0 0 2a3 3 0 1 0-2.6-4.5a1 1 0 0 0 .37 1.37a1 1 0 0 0 1.36-.37A1 1 0 0 1 7 5m12 1h-6a1 1 0 0 0 0 2h6a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 21 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 22 21V9a3 3 0 0 0-3-3"></svg:path>`,
})
export class UilCommentAltQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
