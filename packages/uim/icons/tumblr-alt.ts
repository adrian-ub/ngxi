import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimTumblrAltIcon],svg[uim-tumblr-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.785 17.974a4.7 4.7 0 0 1-1.614.346a1.755 1.755 0 0 1-1.925-1.972V11h4.017V7.095H13.26V2h-2.93a.16.16 0 0 0-.143.15a6.12 6.12 0 0 1-3.935 5.389v3.583h2.024v5.536c0 2.236 1.65 5.415 6.007 5.34a5.34 5.34 0 0 0 3.463-1.17l-.962-2.854"></svg:path>`,
})
export class UimTumblrAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
