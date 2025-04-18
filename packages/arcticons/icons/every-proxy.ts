import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEveryProxyIcon],svg[arcticons-every-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.874 15.221l-.03 4.219h15.583v6.06l8.073-8.11l-8.073-8.527v6.358zm8.4 13.309H12.811v-6.624L4.5 30.55l8.31 8.586v-6.655h15.464z"></svg:path>`,
})
export class ArcticonsEveryProxyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
