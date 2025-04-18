import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicNegativeIcon],svg[healthicons-mobile-clinic-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMobileClinicNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6h3.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-3.126a4.002 4.002 0 0 1-7.748 0h-9.252a4.002 4.002 0 0 1-7.748 0h-1.252a4.002 4.002 0 0 1-7.748 0H4zm38 20h-1.126a4.002 4.002 0 0 0-7.748 0H32v-5h10zm-.474-7H32v-5h3.718a1 1 0 0 1 .678.265zM6 28v5h1.126a4.002 4.002 0 0 1 7.748 0h1.252a4.002 4.002 0 0 1 7.748 0H30v-5zm5 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m11-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m15 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M19 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMobileClinicNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMobileClinicNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
