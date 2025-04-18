import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDashboardAlt3Icon],svg[marketeq-dashboard-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M33.333 18.75L25 31.25"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25 31.208v.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 27.083a18.75 18.75 0 0 1-7 14.584h-23.5a18.75 18.75 0 1 1 30.5-14.584"></svg:path></svg:g>`,
})
export class MarketeqDashboardAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
