import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMNegativeIcon],svg[healthicons-m-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 36V17.524l6.464 7.756a2 2 0 0 0 3.072 0L32 17.524V36a2 2 0 1 0 4 0V12a2 2 0 0 0-3.536-1.28L24 20.876L15.536 10.72A2 2 0 0 0 12 12v24a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
