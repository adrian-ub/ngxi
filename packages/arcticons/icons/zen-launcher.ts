import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZenLauncherIcon],svg[arcticons-zen-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.133 35.683h18.15M7 5.5h28.683L5.5 35.683h5.035m18.332-23.366h-18.15M41 42.5H12.317L42.5 12.317h-5.035"></svg:path>`,
})
export class ArcticonsZenLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
