import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerNegativeIcon],svg[healthicons-thermometer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsThermometerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.982 28.205v1.778a8 8 0 1 0 10-.008v-1.778l-.006-6.212l-.01-12.408c-.002-2.958-2.243-5.355-5.004-5.353c-2.762.003-4.998 2.403-4.996 5.362l.01 12.407zm7.995-5.922c-1.457.025-2.823-.328-4.018-.637c-.73-.188-1.397-.36-1.983-.42l-.01-11.642c-.001-1.775 1.34-3.215 2.998-3.217c1.657-.001 3 1.437 3.002 3.212v.619l-2 .002a1 1 0 0 0 .002 2l2-.002l.002 2l-2 .002a1 1 0 0 0 .002 2l2-.002l.001 2l-2 .002a1 1 0 0 0 .002 2l2-.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsThermometerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsThermometerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
