import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCommunityFillIcon],svg[ri-community-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2zm12 2H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1m-5-10v2h2v-2zm0 4v2h2v-2zm0-8v2h2V7zm-4 0v2h2V7z"></svg:path>`,
})
export class RiCommunityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
