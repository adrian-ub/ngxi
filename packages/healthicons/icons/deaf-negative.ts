import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDeafNegativeIcon],svg[healthicons-deaf-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDeafNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27 7c-6.075 0-11 4.925-11 11h-2c0-7.18 5.82-13 13-13s13 5.82 13 13c0 4.501-2.288 8.467-5.76 10.8c-2.37 1.59-4.24 3.706-4.24 6.11V35a8 8 0 1 1-16 0v-2h2v2a6 6 0 0 0 12 0v-.089c0-3.457 2.628-6.096 5.124-7.772A10.99 10.99 0 0 0 38 18c0-6.075-4.925-11-11-11m-3.178 4.763A7 7 0 0 1 31.95 22.95l-1.415-1.415a5 5 0 0 0-5.805-7.99zm-15.53 7.944L13.587 25l-5.293 5.293l1.414 1.414L15 26.414l5.293 5.293l1.414-1.414L16.414 25l5.293-5.293l-1.414-1.414L15 23.586l-5.293-5.293z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDeafNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDeafNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
