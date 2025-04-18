import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuiPolandIcon],svg[arcticons-tui-poland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.5 20.975l11.068.11m-5.326.392s1.966 15.276 11.294 15.782s13.402-12.301 13.402-12.301"></svg:path><svg:circle cx="39.06" cy="14.166" r="3.44"></svg:circle></svg:g>`,
})
export class ArcticonsTuiPolandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
