import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthNegativeIcon],svg[healthicons-sexual-reproductive-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSexualReproductiveHealthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 0 1 1.977-.304A9 9 0 0 1 16 30.944V33h2a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 1 1 0-2h2v-2q0-.028.002-.055a9 9 0 0 1-6.024-3.316a9 9 0 0 1 10.295-14.013a1 1 0 1 1-.727 1.863m6.86.018a7 7 0 1 1-.177 12.93a1 1 0 1 0-.791 1.837a9 9 0 0 0 11.018-13.306l5.513-5.514l-.032 2.542a1 1 0 1 0 2 .026l.076-6.026l-6.026.076a1 1 0 1 0 .026 2l2.542-.032l-5.401 5.401a9 9 0 0 0-13.89 1.967a9 9 0 0 0-1.201 5.662a1 1 0 0 0 1.986-.236a7 7 0 0 1 4.357-7.327" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSexualReproductiveHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
