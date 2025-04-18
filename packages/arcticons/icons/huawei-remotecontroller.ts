import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiRemotecontrollerIcon],svg[arcticons-huawei-remotecontroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.605" height="31.393" x="13.35" y="12.107" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.577"></svg:rect><svg:rect width="10.853" height="6.492" x="18.725" y="20.678" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.052"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.325 12.107l6.491-7.404M12.184 4.5l7.1 7.607"></svg:path>`,
})
export class ArcticonsHuaweiRemotecontrollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
