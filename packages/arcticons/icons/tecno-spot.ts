import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTecnoSpotIcon],svg[arcticons-tecno-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.28 12.994v30.362c0 .08-.064.144-.144.144H24.77a5.05 5.05 0 0 1-5.05-5.049V12.994a.144.144 0 0 0-.144-.144H9.19a.144.144 0 0 1-.144-.145V9.55a5.05 5.05 0 0 1 5.049-5.05H38.81c.08.001.144.066.144.145V7.8a5.05 5.05 0 0 1-5.049 5.05h-5.481a.144.144 0 0 0-.145.144Z"></svg:path>`,
})
export class ArcticonsTecnoSpotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
