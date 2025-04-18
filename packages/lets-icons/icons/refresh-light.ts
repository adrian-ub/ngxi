import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefreshLightIcon],svg[lets-icons-refresh-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m14 15l-4 4l4 4"></svg:path><svg:path stroke-linecap="round" d="M5.938 15.5a7 7 0 1 1 5.01 3.42"></svg:path></svg:g>`,
})
export class LetsIconsRefreshLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
