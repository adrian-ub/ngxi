import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCopySolidIcon],svg[rivet-icons-copy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 0H0v11h3V9H2V2h7v1h2z"></svg:path><svg:path d="M5 5h11v11H5z"></svg:path></svg:g>`,
})
export class RivetIconsCopySolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
