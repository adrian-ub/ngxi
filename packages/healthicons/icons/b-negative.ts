import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBNegativeIcon],svg[healthicons-b-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsBNegative0)"><svg:path d="M30 18a4 4 0 0 1-4 4h-8v-8h8a4 4 0 0 1 4 4m-4 8h-8v8h8a4 4 0 0 0 0-8"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h10a8 8 0 0 0 5.292-14A8 8 0 0 0 26 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
