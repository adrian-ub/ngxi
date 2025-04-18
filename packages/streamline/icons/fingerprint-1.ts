import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFingerprint1Icon],svg[streamline-fingerprint-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 13.5v-7a6 6 0 1 1 12 0v2m-9 5v-2"></svg:path><svg:path d="M4 9V7a3 3 0 0 1 6 0v6.5m3-2v2M7 12v1.5m0-4v-2"></svg:path></svg:g>`,
})
export class StreamlineFingerprint1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
