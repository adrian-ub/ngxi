import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSortIcon],svg[marketeq-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25h29.167"></svg:path><svg:path stroke="#306CFE" d="M6.25 35.417h20.833M6.25 14.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqSortIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
