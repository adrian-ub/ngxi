import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp5CircleThinIcon],svg[iconamoon-arrow-up-5-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m15 12l-3-3m0 0l-3 3m3-3v6"></svg:path></svg:g>`,
})
export class IconamoonArrowUp5CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
