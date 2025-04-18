import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerNegativeIcon],svg[healthicons-ppe-sanitizer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeSanitizerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm13.928 9.048a8.8 8.8 0 0 0-1.56 1.948l-1.736-.992a10.7 10.7 0 0 1 1.94-2.427C13.43 6.787 14.625 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v3h1a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V24a5 5 0 0 1 5-5h1v-3a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.072 1.048M18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeSanitizerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeSanitizerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
