import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLightBulbOffIcon],svg[iconoir-light-bulb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6m-5 3h4m2.5-9.5c1-1 1.477-2.013 1.5-3.5c.048-3.05-2-5-6-5c-1.168 0-2.169.166-3 .477M9 15c0-2-.5-2.5-1.5-3.5S6.023 9.487 6 8a5.6 5.6 0 0 1 .168-1.5M3 3l18 18"></svg:path>`,
})
export class IconoirLightBulbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
