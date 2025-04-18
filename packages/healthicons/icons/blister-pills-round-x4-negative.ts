import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBlisterPillsRoundX4NegativeIcon],svg[healthicons-blister-pills-round-x4-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsBlisterPillsRoundX4Negative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 1 0 0 2v15a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V25a1 1 0 1 0 0-2zm3 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path d="M22 14a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M22 34a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBlisterPillsRoundX4Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBlisterPillsRoundX4NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
