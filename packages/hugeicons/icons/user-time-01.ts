import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime01Icon],svg[hugeicons-user-time-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 8a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path><svg:path d="M2.5 20a7 7 0 0 1 10-6.326M19 18l-1-.5V16m3.5 1.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g>`,
})
export class HugeiconsUserTime01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
