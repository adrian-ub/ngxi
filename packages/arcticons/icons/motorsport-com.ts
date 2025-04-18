import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotorsportComIcon],svg[arcticons-motorsport-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.141v-7.648c0-2.56-2.012-4.635-4.494-4.635s-4.494 2.075-4.494 4.635v7.648M24 20.494c0-2.56 2.012-4.635 4.494-4.635s4.494 2.075 4.494 4.635v7.648m0 3.999H15.012"></svg:path>`,
})
export class ArcticonsMotorsportComIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
