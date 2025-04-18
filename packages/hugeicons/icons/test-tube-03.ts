import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTestTube03Icon],svg[hugeicons-test-tube-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.016 2.002h7.96M5.533 11.15s3-.926 5.5 1.852m7.5-1.389s-.611.98-1.5 1.389m-7 5.002l.009-.003m3.991-3.997l.009-.002"></svg:path><svg:path d="M9.527 2.215v4.042c0 .662-.352 1.233-.933 1.545c-2.985 1.6-5.789 6.132-2.848 10.777c.658 1.14 2.83 3.419 6.254 3.419s5.596-2.28 6.254-3.419c2.941-4.645.137-9.178-2.848-10.777a1.73 1.73 0 0 1-.934-1.545V2.264"></svg:path></svg:g>`,
})
export class HugeiconsTestTube03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
