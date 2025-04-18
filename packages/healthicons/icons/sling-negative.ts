import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingNegativeIcon],svg[healthicons-sling-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSlingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-8 9h.014l-1.954 2.487A2.002 2.002 0 0 1 16 31m11 7.5c0-1.6-1.073-2.948-2.538-3.366l.756-1.86A5.502 5.502 0 0 1 27.743 42H32a9 9 0 1 0 0-18H16a9 9 0 1 0 0 18h8v-.035a3.5 3.5 0 0 0 3-3.465M23.036 26l-2.969 3.078l-7.756 9.872A6.97 6.97 0 0 0 16 40h4.327l5.687-14zM32 35a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSlingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSlingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
