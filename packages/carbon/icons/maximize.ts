import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMaximizeIcon],svg[carbon-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414z"></svg:path>`,
})
export class CarbonMaximizeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
