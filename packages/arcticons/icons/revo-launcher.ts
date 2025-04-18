import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRevoLauncherIcon],svg[arcticons-revo-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.198 33.574h29.605m-24.622 4.844h19.638m-20.908-20.66V9.157h2.802c1.584 0 2.868 1.293 2.868 2.888s-1.284 2.889-2.868 2.889H12.91m2.802 0l2.802 2.822M32.95 12.06a2.14 2.14 0 0 1 2.139 2.14v1.419a2.14 2.14 0 0 1-2.14 2.14h0a2.14 2.14 0 0 1-2.139-2.14v-1.42a2.14 2.14 0 0 1 2.14-2.139m-8.966 4.614a2.137 2.137 0 0 1-3.998-1.065V14.21c0-1.187.957-2.15 2.139-2.15s2.14.963 2.14 2.15v.7h-4.28m5.404-2.854l2.14 5.698l2.139-5.698"></svg:path>`,
})
export class ArcticonsRevoLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
