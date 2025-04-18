import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUnderlineIcon],svg[icomoon-free-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h2v6.5c0 2.485-2.239 4.5-5 4.5S3 9.985 3 7.5V1h2v6.5c0 .628.285 1.23.802 1.695C6.379 9.714 7.159 10 8 10s1.621-.286 2.198-.805C10.715 8.729 11 8.127 11 7.5zM3 13h10v2H3z"></svg:path>`,
})
export class IcomoonFreeUnderlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
