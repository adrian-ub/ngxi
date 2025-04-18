import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireDoubleFilledIcon],svg[tdesign-questionnaire-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v14H5.82L1 19.443V2zM9.5 7.5a1 1 0 1 1 2 0c0 .324-.078.508-.15.618a.96.96 0 0 1-.344.305c-.16.091-.328.152-.52.218l-.017.007c-.075.026-.202.07-.309.12a1.3 1.3 0 0 0-.296.192c-.116.103-.36.366-.36.79v1h2v-.352c.15-.061.32-.14.493-.238a2.96 2.96 0 0 0 1.029-.95c.302-.464.474-1.034.474-1.71a3 3 0 1 0-6 0v1h2zm2.004 4H9.5v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M23.5 22.943V4.5h-2v14.557L19.32 17.5H7.5v2h11.18z"></svg:path>`,
})
export class TdesignQuestionnaireDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
