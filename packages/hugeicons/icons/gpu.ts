import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGpuIcon],svg[hugeicons-gpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 21V5c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C2.696 3 2.464 3 2 3m2 2h13c2.357 0 3.535 0 4.268.732S22 7.643 22 10v4.5c0 2.357 0 3.535-.732 4.268c-.733.732-1.911.732-4.268.732h-4.882a1.81 1.81 0 0 1-1.618-1c-.306-.613-.933-1-1.618-1H4"></svg:path><svg:path d="M19 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-11.5-3h2m-2 3h2m-2 3h2"></svg:path></svg:g>`,
})
export class HugeiconsGpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
