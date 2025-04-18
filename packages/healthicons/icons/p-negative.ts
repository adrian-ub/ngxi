import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPNegativeIcon],svg[healthicons-p-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsPNegative0)"><svg:path d="M26 22h-8v-8h8a4 4 0 0 1 0 8"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h8a8 8 0 1 0 0-16z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
