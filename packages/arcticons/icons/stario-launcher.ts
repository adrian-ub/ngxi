import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStarioLauncherIcon],svg[arcticons-stario-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.393" cy="15.893" r="8.107" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.607" cy="32.107" r="8.107" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.607 24a8.107 8.107 0 0 1 0-16.213h15.775a8.107 8.107 0 0 0 0 16.213h7.011a8.107 8.107 0 0 1 0 16.213H19.618a8.107 8.107 0 0 0 0-16.213z"></svg:path>`,
})
export class ArcticonsStarioLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
