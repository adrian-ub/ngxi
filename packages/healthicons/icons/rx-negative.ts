import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxNegativeIcon],svg[healthicons-rx-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRxNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-7 9a1 1 0 0 0-1 1v16h2v-7h2.586l6 6l-4.293 4.293l1.414 1.414L28 30.414l4.293 4.293l1.414-1.414L29.414 29l4.293-4.293l-1.414-1.414L28 27.586l-4.602-4.602A5 5 0 0 0 23 13zm1 8h5a3 3 0 1 0 0-6h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRxNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRxNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
