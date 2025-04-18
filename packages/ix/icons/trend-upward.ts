import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendUpwardIcon],svg[ix-trend-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 149.333V320H320l-.039-97.814l-198.995 198.991l-30.161-30.165l199.012-199.034L192 192v-42.667z"></svg:path>`,
})
export class IxTrendUpwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
