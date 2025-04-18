import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStarkIcon],svg[gg-stark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 18.025a8 8 0 0 1 4.935-14.948l-.437 3.126a4.844 4.844 0 0 0-2.988 9.05l6.146-11.278l2.634 1.436a8 8 0 0 1-4.934 14.948l.436-3.126a4.844 4.844 0 0 0 2.988-9.05L9.806 19.46z"></svg:path>`,
})
export class GgStarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
