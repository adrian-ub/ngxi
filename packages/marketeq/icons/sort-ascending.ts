import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSortAscendingIcon],svg[marketeq-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25L12.5 39.583L4.167 31.25m8.333 8.333V8.333"></svg:path><svg:path stroke="#306CFE" d="M41.667 12.5H20.833m20.834 20.833H31.25zm0-10.416H27.083z"></svg:path></svg:g>`,
})
export class MarketeqSortAscendingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
