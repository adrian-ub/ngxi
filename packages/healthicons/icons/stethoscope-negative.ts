import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeNegativeIcon],svg[healthicons-stethoscope-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStethoscopeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27 19c.552 0 1.005.449.955.999A11 11 0 0 1 20 29.583V32a3 3 0 0 1-2 2.83a5.25 5.25 0 0 0 10.5-.08v-4a5.75 5.75 0 0 1 11.5 0v2.42a3.001 3.001 0 1 1-2 0v-2.42a3.75 3.75 0 1 0-7.5 0v4a7.25 7.25 0 0 1-14.5.08A3 3 0 0 1 14 32v-2.417a11 11 0 0 1-7.955-9.584c-.05-.55.403-.999.955-.999v-9a3 3 0 0 1 3-3h.268A2 2 0 0 1 14 8a2 2 0 0 1-3.732 1H10a1 1 0 0 0-1 1v9h-.21c.553 0 .993.45 1.07.997a7.21 7.21 0 0 0 14.28 0c.077-.547.517-.997 1.07-.997H25v-9a1 1 0 0 0-1-1h-.268A2 2 0 0 1 20 8a2 2 0 0 1 3.732-1H24a3 3 0 0 1 3 3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStethoscopeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStethoscopeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
