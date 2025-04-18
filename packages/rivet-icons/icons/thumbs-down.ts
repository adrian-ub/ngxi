import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsThumbsDownIcon],svg[rivet-icons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.617 1H16v9h-4.323l-2 5H8a3 3 0 0 1-3-3v-1H2.633A2 2 0 0 1 .648 8.752L1.618 1ZM12 8h2V3h-2zm-2-5H3.383l-.75 6H7v3a1 1 0 0 0 1 1h.323L10 8.807z"></svg:path>`,
})
export class RivetIconsThumbsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
