import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBillDollarIcon],svg[marketeq-bill-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 27.083h5.209a3.126 3.126 0 0 0 0-6.25h-2.084a3.125 3.125 0 0 1 0-6.25h5.209M25 22.917h-8.333M37.5 14.583V12.5zm0 14.584v-2.084zM25 31.25h-8.333z"></svg:path><svg:path stroke="#306CFE" d="M29.167 6.25h-18.75a2.083 2.083 0 0 0-2.084 2.083V43.75l4.875-2.083l4.855 2.083l4.854-2.083l4.854 2.083l4.854-2.083L37.5 43.75V37.5"></svg:path></svg:g>`,
})
export class MarketeqBillDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
