import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonClockThinIcon],svg[iconamoon-clock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M11 8v5h5"></svg:path></svg:g>`,
})
export class IconamoonClockThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
