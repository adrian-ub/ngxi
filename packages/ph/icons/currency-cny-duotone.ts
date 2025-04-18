import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyDuotoneIcon],svg[ph-currency-cny-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v56H64V56Z" opacity=".2"></svg:path><svg:path d="M56 56a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m160 104a8 8 0 0 0-8 8v16h-32a16 16 0 0 1-16-16v-48h48a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16h48v8a56.06 56.06 0 0 1-56 56a8 8 0 0 0 0 16a72.08 72.08 0 0 0 72-72v-8h32v48a32 32 0 0 0 32 32h40a8 8 0 0 0 8-8v-24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCurrencyCnyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
