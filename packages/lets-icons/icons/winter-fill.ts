import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterFillIcon],svg[lets-icons-winter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="4" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 9V7m0-3v3m0 0L9 5m3 2l3-2m.5 7.5h2m3 0h-3m0 0l2-3m-2 3l2 3M12 16v2m0 3v-3m0 0l-3 2m3-2l3 2m-6.5-7.5h-2m-3 0h3m0 0l-2-3m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
