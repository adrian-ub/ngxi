import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRecycleIcon],svg[marketeq-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m11.167 28.438l-4.605 7.77a2.25 2.25 0 0 0 1.959 3.375h14.396m10.416 0l8.188.105a2.23 2.23 0 0 0 1.916-3.376l-7.041-12.229m-4.958-8.813l-4.355-7.895a2.25 2.25 0 0 0-3.895 0l-7.209 12.5"></svg:path><svg:path stroke="#344054" d="m19.375 35.417l3.542 4.166l-4.167 4.167M34.417 29l1.833-5.146l5.688 1.521m-20.646-6.5l-5.375.98l-1.521-5.688"></svg:path></svg:g>`,
})
export class MarketeqRecycleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
