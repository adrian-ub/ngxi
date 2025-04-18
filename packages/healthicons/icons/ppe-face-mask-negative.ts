import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskNegativeIcon],svg[healthicons-ppe-face-mask-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeFaceMaskNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.294 11.044a1 1 0 0 0-.588 0l-13 4A1 1 0 0 0 10 16v1H9a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h2.456a9 9 0 0 0 4.897 3.693l7.353 2.263a1 1 0 0 0 .588 0l7.353-2.263A9 9 0 0 0 36.544 31H39a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5h-1v-1a1 1 0 0 0-.706-.956zM10.482 29A9 9 0 0 1 10 26.091V19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zM39 29h-1.482A9 9 0 0 0 38 26.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3m-21-8h12v-2H18zm0 6h12v-2H18z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeFaceMaskNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeFaceMaskNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
