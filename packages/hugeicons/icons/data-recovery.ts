import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDataRecoveryIcon],svg[hugeicons-data-recovery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 12c0 1.657 3.582 3 8 3q.508 0 1-.023"></svg:path><svg:path d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.508 0 1-.023"></svg:path><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 8v2m0 5v2m12.987-3l.5 2.084l-.83-.518a3.5 3.5 0 0 0-2.122-.715c-1.952 0-3.535 1.6-3.535 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"></svg:path></svg:g>`,
})
export class HugeiconsDataRecoveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
