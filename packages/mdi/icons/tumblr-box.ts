import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrBoxIcon],svg[mdi-tumblr-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 11h-3v3.9c0 .73.14 1.1 1.1 1.1H16v3s-1.03.1-2.1.1c-2.65 0-3.9-1.6-3.9-3.4V11H8V8.2c2.41-.2 2.62-2.04 2.8-3.2H13v3h3m4-6H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class MdiTumblrBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
