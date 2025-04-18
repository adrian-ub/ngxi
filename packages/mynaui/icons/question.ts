import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionIcon],svg[mynaui-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21v-.5m0-3c0-5.1 5-3.825 5-8.924c0-6.768-10-6.768-10 0"></svg:path>`,
})
export class MynauiQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
