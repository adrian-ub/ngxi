import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsThumbsUpIcon],svg[rivet-icons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.323 1H8a3 3 0 0 1 3 3v1h2.367a2 2 0 0 1 1.985 2.248L14.382 15H0V6h4.323zM4 8H2v5h2zm2 5h6.617l.75-6H9V4a1 1 0 0 0-1-1h-.323L6 7.193z"></svg:path>`,
})
export class RivetIconsThumbsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
