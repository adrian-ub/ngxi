import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEigonotomoIcon],svg[arcticons-eigonotomo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.708 38.184c.4 1.726-1.55 3.652-4.354 4.302s-5.403-.222-5.803-1.948h0c-.4-1.726 1.55-3.652 4.354-4.302s5.403.222 5.803 1.948q0 0 0 0m26.569-3.58c.776 1.698-.532 3.96-2.92 5.05c-2.388 1.092-4.954.6-5.73-1.098c-.775-1.698.532-3.959 2.921-5.05s4.954-.6 5.73 1.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.677 39.25l8.4-33.215c.181-.786 2.392-1.015 2.733-.332L42.197 34.41M20.085 21.818l14.102-2.35"></svg:path>`,
})
export class ArcticonsEigonotomoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
