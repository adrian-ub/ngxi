import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFingerprint2Icon],svg[streamline-fingerprint-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.39a5 5 0 0 0 5-5V5.61a5 5 0 0 0-1.27-3.33M2 6.72v1.67A5 5 0 0 0 5.06 13M9.5 1.28a5 5 0 0 0-6.83 1.83a4.9 4.9 0 0 0-.57 1.52"></svg:path><svg:path d="M6.48 3.51A2.51 2.51 0 0 1 9.5 6v1.61m-.64 2.1A2.5 2.5 0 0 1 4.5 8V6a2.5 2.5 0 0 1 .2-1M7 6.11v1.67"></svg:path></svg:g>`,
})
export class StreamlineFingerprint2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
