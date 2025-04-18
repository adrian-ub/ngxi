import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFullAltIcon],svg[lets-icons-full-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20v1h1v-1zm-4.293-5.707a1 1 0 0 0-1.414 1.414zM19 14v6h2v-6zm1 5h-6v2h6zm.707.293l-5-5l-1.414 1.414l5 5zM4 20H3v1h1zm5.707-4.293a1 1 0 0 0-1.414-1.414zM3 14v6h2v-6zm1 7h6v-2H4zm.707-.293l5-5l-1.414-1.414l-5 5zM20 4h1V3h-1zm-5.707 4.293a1 1 0 0 0 1.414 1.414zM21 10V4h-2v6zm-1-7h-6v2h6zm-.707.293l-5 5l1.414 1.414l5-5zM4 4V3H3v1zm4.293 5.707a1 1 0 0 0 1.414-1.414zM5 10V4H3v6zM4 5h6V3H4zm-.707-.293l5 5l1.414-1.414l-5-5z"></svg:path>`,
})
export class LetsIconsFullAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
