import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualizer3LineIcon],svg[ri-equalizer-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v3H3v2h4v3h2V3zm4 5h10V6H11zm6 5v3h4v2h-4v3h-2v-8zm-4 5H3v-2h10z"></svg:path>`,
})
export class RiEqualizer3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
