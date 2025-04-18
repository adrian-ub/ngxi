import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualizer3FillIcon],svg[ri-equalizer-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v3H3v2h4v3h3V3zm5 5h9V6h-9zm5 5v3h4v2h-4v3h-3v-8zm-5 5H3v-2h9z"></svg:path>`,
})
export class RiEqualizer3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
