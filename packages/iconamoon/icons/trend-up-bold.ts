import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTrendUpBoldIcon],svg[iconamoon-trend-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:path d="m3 17l6-6l4 4l8-8"></svg:path><svg:path d="M17 7h4v4"></svg:path></svg:g>`,
})
export class IconamoonTrendUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
