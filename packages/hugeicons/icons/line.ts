import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLineIcon],svg[hugeicons-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10.5C2 15.194 6.477 19 12 19q1.03-.001 2-.17V22c1.67-1.635 4.5-4.5 6.256-6.703C21.356 13.932 22 12.28 22 10.5C22 5.806 17.523 2 12 2S2 5.806 2 10.5"></svg:path><svg:path d="M6 8.5v4h1m2-4v4m2.1 0v-4l2.4 4v-4m4 0h-1.9v2m1.9 2h-1.9v-2m0 0h1.44"></svg:path></svg:g>`,
})
export class HugeiconsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
