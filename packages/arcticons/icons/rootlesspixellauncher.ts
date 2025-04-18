import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRootlesspixellauncherIcon],svg[arcticons-rootlesspixellauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.667 21.848L26.02 7.625a3 3 0 0 0-3.904 0L5.372 21.848a2.43 2.43 0 0 0-.305 3.426l.014.017a2.4 2.4 0 0 0 1.922.871h2.092v13.303a1.63 1.63 0 0 0 1.632 1.631h7.356a1.63 1.63 0 0 0 1.632-1.631h0v-8.188a1 1 0 0 1 1-1.001h6.647a1 1 0 0 1 1.001 1v8.189a1.63 1.63 0 0 0 1.632 1.631h7.357a1.63 1.63 0 0 0 1.631-1.631h0V26.162h2.052a2.442 2.442 0 0 0 1.591-4.314Z"></svg:path>`,
})
export class ArcticonsRootlesspixellauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
