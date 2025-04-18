import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReIcon],svg[hugeicons-re-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m15.992 2h.01m-.01 3.5h.01"></svg:path><svg:path d="M7 14.5s1.5-2 3-.5m-3 .5V18m0-3.5V13m5 2.5v-.75a1.75 1.75 0 1 1 3.5 0v.75zm0 0v.75a1.75 1.75 0 0 0 3 1.225"></svg:path></svg:g>`,
})
export class HugeiconsReIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
