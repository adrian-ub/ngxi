import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJarIcon],svg[hugeicons-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.005 2.076V16c0 2.828 0 4.243.88 5.121s2.296.879 5.13.879c2.832 0 4.249 0 5.129-.879c.88-.878.88-2.293.88-5.121V7.25c0-.955.182-1.493.75-2.25c.444-.59 1.644-1.743 1.077-2.566C20.552 2 19.792 2 18.273 2H10.01c-2.833 0-4.25 0-5.13.879C4 3.757 4 5.172 4 8v2m15-2h-3m3 3.333h-3m3 3.334h-3M18.5 18H16" color="currentColor"></svg:path>`,
})
export class HugeiconsJarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
