import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlant01Icon],svg[hugeicons-plant-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 10s-6 4-6 11m-2.651-9.817a4.114 4.114 0 0 1-5.37-.388C1.555 8.372 2.039 3.04 2.039 3.04s5.333-.485 7.756 1.939a4.1 4.1 0 0 1 1.16 3.521"></svg:path><svg:path d="M14.964 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894a3.65 3.65 0 0 1-2.741 1.068M6 7s6 5 6 14"></svg:path></svg:g>`,
})
export class HugeiconsPlant01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
