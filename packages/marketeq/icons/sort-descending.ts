import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSortDescendingIcon],svg[marketeq-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M4.167 16.667L12.5 8.333l8.333 8.334M12.5 8.333v31.25"></svg:path><svg:path stroke="#306CFE" d="M41.667 35.417H20.833m20.834-20.834H31.25zm0 10.417H27.083z"></svg:path></svg:g>`,
})
export class MarketeqSortDescendingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
