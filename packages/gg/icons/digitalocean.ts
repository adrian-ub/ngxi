import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDigitaloceanIcon],svg[gg-digitalocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a6 6 0 0 0-6 6H1C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11v-5a6 6 0 0 0 0-12"></svg:path><svg:path d="M7 18v-5h5v5zm-4 0v4h4v-4zm0 0H1v-2h2z"></svg:path></svg:g>`,
})
export class GgDigitaloceanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
