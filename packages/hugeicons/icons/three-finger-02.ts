import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger02Icon],svg[hugeicons-three-finger-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.76 13.48l-.018-8.451a1.5 1.5 0 1 1 3.001-.003m0 0v4.98m0-4.98V3.497a1.5 1.5 0 1 1 3.002.004v7.51m3 .987v-1.853m0 0V5.483a1.5 1.5 0 1 0-3-.003m3 4.665c.807-.121 2.78 0 3.003 1.857v3.682c0 1.36-.23 2.46-1.619 4.057c-.515.675-.444 1.354-.444 2.261M7.751 8.999c-.638.556-2.249 2.079-3.152 3.457c-1.254 1.913 1.223 4.407 2.248 5.796c1.517 1.813 1.415 1.762 1.415 3.743" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
