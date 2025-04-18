import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMedicalSquareIcon],svg[uil-medical-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM17 9h-2V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-1 4h-2a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V8h2v2a1 1 0 0 0 1 1h2Z"></svg:path>`,
})
export class UilMedicalSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
