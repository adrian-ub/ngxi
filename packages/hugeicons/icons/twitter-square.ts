import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwitterSquareIcon],svg[hugeicons-twitter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.4 7C13.075 7 12 8.12 12 9.5q0 .318.073.613a6 6 0 0 1-.373.012c-2.02 0-3.796-1.408-4.808-3.06A7.8 7.8 0 0 0 6.6 9.188c0 2.067.802 4.25 2.1 5.607c0 .735-1.8 1.108-2.7 1.203A6.95 6.95 0 0 0 9.6 17c3.889 0 7.057-3.21 7.195-7.226L18 7.313l-2.012.312A2.34 2.34 0 0 0 14.4 7"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsTwitterSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
