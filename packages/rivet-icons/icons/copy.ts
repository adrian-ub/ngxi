import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCopyIcon],svg[rivet-icons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 0H0v11h3V9H2V2h7v1h2z"></svg:path><svg:path d="M16 5H5v11h11zm-9 9V7h7v7z"></svg:path></svg:g>`,
})
export class RivetIconsCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
