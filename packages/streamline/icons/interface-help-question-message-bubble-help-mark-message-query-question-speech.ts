import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHelpQuestionMessageBubbleHelpMarkMessageQueryQuestionSpeechIcon],svg[streamline-interface-help-question-message-bubble-help-mark-message-query-question-speech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h2v2.5L6.62 11h5.88a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5A1.5 1.5 0 1 1 7 6v.5"></svg:path><svg:path fill="currentColor" d="M7 8a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 8Z"></svg:path>`,
})
export class StreamlineInterfaceHelpQuestionMessageBubbleHelpMarkMessageQueryQuestionSpeechIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
