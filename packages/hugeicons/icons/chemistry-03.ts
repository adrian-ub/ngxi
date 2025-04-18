import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChemistry03Icon],svg[hugeicons-chemistry-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M3 9h8m9 0h-4m-5.5-5h6"></svg:path><svg:path d="M11.7 4v4.952c0 .402-.246.755-.588.964C9.843 10.69 9 12.062 9 13.625C9 16.041 11.015 18 13.5 18s4.5-1.959 4.5-4.375c0-1.563-.843-2.935-2.112-3.709c-.342-.209-.588-.562-.588-.964V4"></svg:path></svg:g>`,
})
export class HugeiconsChemistry03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
