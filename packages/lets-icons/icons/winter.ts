import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterIcon],svg[lets-icons-winter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M12 8V6m0-3v3m0 0L9 4m3 2l3-2m1 8h2m3 0h-3m0 0l2-3m-2 3l2 3m-8 1v2m0 3v-3m0 0l-3 2m3-2l3 2m-7-8H6m-3 0h3m0 0L4 9m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
