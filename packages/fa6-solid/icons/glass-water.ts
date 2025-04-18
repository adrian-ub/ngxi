import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidGlassWaterIcon],svg[fa6-solid-glass-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4.1 34.3l28.8 403.4c3 41.9 37.8 74.3 79.8 74.3h166.6c42 0 76.8-32.4 79.8-74.3l28.8-403.4c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0zm41 156.5L66.4 64h251.3l-6.7 92.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0a74.56 74.56 0 0 0-66.4 0c-19.4 9.7-42.2 9.7-61.6 0z"></svg:path>`,
})
export class Fa6SolidGlassWaterIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
