import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlayStoreIcon],svg[hugeicons-play-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.94 12.431c-.233.952-1.474 1.636-3.955 3.003c-2.7 1.488-4.049 2.231-5.142 1.945a2.7 2.7 0 0 1-.998-.5C7 16.197 7 14.778 7 11.94S7 7.683 7.845 7c.287-.231.628-.402.998-.499c1.093-.287 2.443.457 5.142 1.944c2.482 1.368 3.722 2.052 3.956 3.004c.079.324.079.66 0 .983M8 17l8-7.386M8 7l8 7.386"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsPlayStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
