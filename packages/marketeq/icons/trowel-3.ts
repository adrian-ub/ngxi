import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTrowel3Icon],svg[marketeq-trowel-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.813 26.188l-6.021 6.041"></svg:path><svg:path stroke="#306CFE" d="M7.48 42.52a4.167 4.167 0 0 1 0-5.874l5.874-5.896a2.08 2.08 0 0 1 2.959 0l2.937 2.938a2.083 2.083 0 0 1 0 2.958l-5.896 5.875a4.167 4.167 0 0 1-5.875 0m22.916-9.708a2.083 2.083 0 0 0 2.979 0c3.667-3.833 12.458-14.458 9.958-26.145c-11.687-2.5-22.312 6.291-26.125 10a2.083 2.083 0 0 0 0 2.979z"></svg:path></svg:g>`,
})
export class MarketeqTrowel3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
