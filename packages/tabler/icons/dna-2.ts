import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDna2Icon],svg[tabler-dna-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 3v1q-.015 5.028-5.008 8.014c-3.328 1.99 3.336-2 .008-.014c-3.328 1.99-5 4.662-5.008 8.014v1"></svg:path><svg:path d="M17 21.014v-1q-.015-5.028-5.008-8.014c-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8"></svg:path></svg:g>`,
})
export class TablerDna2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
