import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeaceNegativeIcon],svg[healthicons-peace-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPeaceNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23 6.027C13.524 6.547 6 14.394 6 24c0 4.61 1.734 8.817 4.585 12.001l.208-.208L23 23.586zm0 35.946a17.93 17.93 0 0 1-11.001-4.557l.208-.209L23 26.414zM37.416 36A17.93 17.93 0 0 0 42 24c0-9.606-7.524-17.454-17-17.973v17.559zM36 37.416a17.93 17.93 0 0 1-11 4.557V26.414zM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPeaceNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPeaceNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
