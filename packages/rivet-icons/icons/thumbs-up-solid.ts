import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsThumbsUpSolidIcon],svg[rivet-icons-thumbs-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.323 1H8a3 3 0 0 1 3 3v1h2.367a2 2 0 0 1 1.985 2.248L14.382 15H5.5V5.557zM3.5 6H0v9h3.5z"></svg:path>`,
})
export class RivetIconsThumbsUpSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
