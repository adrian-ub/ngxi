import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortUpLightIcon],svg[lets-icons-sort-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M5 16h8m-8-4h6M5 8h4"></svg:path><svg:path d="m19 6l3 3m-3-3l-3 3m3-3v12"></svg:path></svg:g>`,
})
export class LetsIconsSortUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
