import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCreditcardOffIcon],svg[tdesign-creditcard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .586L23.414 22L22 23.414L19.586 21H1V3h.586l-1-1zM3 5v4h4.586l-4-4zm0 6v8h14.586l-8-8zm4.581-8.001L23.001 3l.002 9.418l-.003-.004l.003 6.004L21 16.415v-5.414l-5.413.001l-2.005-2.003L21 9V5l-11.413.001zM5.001 14h5v2H5z"></svg:path>`,
})
export class TdesignCreditcardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
