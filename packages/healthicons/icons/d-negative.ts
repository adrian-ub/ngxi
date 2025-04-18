import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDNegativeIcon],svg[healthicons-d-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsDNegative0)"><svg:path d="M16 34V14h6c5.523 0 10 4.477 10 10s-4.477 10-10 10z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM14 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8c7.732 0 14-6.268 14-14s-6.268-14-14-14z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
