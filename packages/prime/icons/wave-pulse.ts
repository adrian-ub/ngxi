import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeWavePulseIcon],svg[prime-wave-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.053 5.252a.75.75 0 0 1 .658.51l3.428 10.283l2.19-4.38A.75.75 0 0 1 17 11.25h2a.75.75 0 1 1 0 1.5h-1.537l-2.792 5.585a.75.75 0 0 1-1.382-.098L9.86 7.955l-2.19 4.38a.75.75 0 0 1-.67.415H5a.75.75 0 0 1 0-1.5h1.536L9.33 5.665a.75.75 0 0 1 .724-.413" clip-rule="evenodd"></svg:path>`,
})
export class PrimeWavePulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
