import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommunityIcon],svg[arcticons-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.402 30.896h4m-4-6.9l2-1.1m0 0v8M7.032 5.876h33.936a1.52 1.52 0 0 1 1.516 1.521v24.79a1.52 1.52 0 0 1-1.516 1.521H5.516V7.398a1.52 1.52 0 0 1 1.516-1.522m9.028 27.847v8.4L5.516 33.709"></svg:path>`,
})
export class ArcticonsCommunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
