import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHanpingPopupIcon],svg[arcticons-hanping-popup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 21.944H15.778C10.1 21.944 5.5 26.546 5.5 32.222S10.102 42.5 15.778 42.5s10.278-4.601 10.278-10.278V5.5"></svg:path>`,
})
export class ArcticonsHanpingPopupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
