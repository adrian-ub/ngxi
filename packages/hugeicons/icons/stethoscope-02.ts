import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStethoscope02Icon],svg[hugeicons-stethoscope-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 3.5h-2a1 1 0 0 0-1 1V8a5.5 5.5 0 1 0 11 0V4.5a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M18.5 15.5v1.25a4.75 4.75 0 1 1-9.5 0V13.5m2.5-11v2m-5-2v2"></svg:path><svg:path d="M20.5 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsStethoscope02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
