import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCallOfDutyIcon],svg[arcticons-call-of-duty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.467v27.01l4.116 2.873l6.296-4.034l.003-25.145L8.7 7.651Zm39 0v27.01l-4.116 2.873l-6.296-4.034l-.003-25.145l6.215-3.52Zm-13.317 2.301v14.575L24 30.846l-6.184-3.503V12.768L24 16.27Z"></svg:path>`,
})
export class ArcticonsCallOfDutyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
