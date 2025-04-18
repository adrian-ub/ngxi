import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationShare01Icon],svg[hugeicons-location-share-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.168 7a10.03 10.03 0 0 1 0 8.002m-18.336 0a10.03 10.03 0 0 1 0-8.002m10.515 12.962A1.95 1.95 0 0 1 12 20.5a1.95 1.95 0 0 1-1.347-.538c-3.31-3.18-7.744-6.732-5.581-11.89C6.242 5.285 9.048 3.5 12 3.5s5.76 1.784 6.929 4.573c2.16 5.15-2.264 8.72-5.582 11.889"></svg:path><svg:path d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsLocationShare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
