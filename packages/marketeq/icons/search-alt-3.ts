import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSearchAlt3Icon],svg[marketeq-search-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M41.667 41.667L31.146 31.146"></svg:path><svg:path stroke="#344054" stroke-width="3" d="m42.708 42.708l-7.291-7.291"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M20.833 35.417c8.055 0 14.584-6.53 14.584-14.584S28.887 6.25 20.833 6.25S6.25 12.78 6.25 20.833c0 8.055 6.53 14.584 14.583 14.584"></svg:path></svg:g>`,
})
export class MarketeqSearchAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
