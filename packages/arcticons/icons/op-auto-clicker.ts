import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpAutoClickerIcon],svg[arcticons-op-auto-clicker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.865 19.278h10.857C36.979 9.9 32.609 4.11 25.616 4.52zm-3.406 0H11.602C11.345 9.9 15.715 4.11 22.708 4.52zm-11.1 3.64C10.182 41.545 15.345 43.488 24 43.488s13.817-1.944 12.642-20.57z"></svg:path>`,
})
export class ArcticonsOpAutoClickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
