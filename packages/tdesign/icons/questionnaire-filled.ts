import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireFilledIcon],svg[tdesign-questionnaire-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM11 8.5a1 1 0 1 1 2 0c0 .324-.078.508-.15.618a.96.96 0 0 1-.344.305c-.16.091-.328.152-.52.218l-.017.007c-.075.026-.202.07-.309.12a1.3 1.3 0 0 0-.296.192a1.05 1.05 0 0 0-.36.79v1h2v-.352c.15-.061.32-.14.493-.238a2.96 2.96 0 0 0 1.029-.95c.302-.464.474-1.034.474-1.71a3 3 0 1 0-6 0v1h2zm2.004 4H11v2.004h2.004z"></svg:path>`,
})
export class TdesignQuestionnaireFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
