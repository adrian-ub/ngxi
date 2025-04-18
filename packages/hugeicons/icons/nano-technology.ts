import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNanoTechnologyIcon],svg[hugeicons-nano-technology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5 16l5-3m4-2l5-3m-7-3v5m0 4v5M5 8l5 3m4 2l5 3m1.5-7v5.5m-7 6l5.5-3m-14.5 0l6 3m-7-5.5V9m1-2.5l6-3m9 3l-6-3"></svg:path><svg:circle cx="12" cy="3.5" r="1.5"></svg:circle><svg:circle cx="12" cy="20.5" r="1.5"></svg:circle><svg:circle cx="3.5" cy="7.5" r="1.5"></svg:circle><svg:circle cx="20.5" cy="7.5" r="1.5"></svg:circle><svg:circle cx="20.5" cy="16.5" r="1.5"></svg:circle><svg:circle cx="3.5" cy="16.5" r="1.5"></svg:circle><svg:path d="m12 9.75l2 1.125v2.25l-2 1.125l-2-1.125v-2.25z"></svg:path></svg:g>`,
})
export class HugeiconsNanoTechnologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
