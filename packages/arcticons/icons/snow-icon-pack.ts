import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnowIconPackIcon],svg[arcticons-snow-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 3.5l-5.918 10.25L24 24l5.918-10.25Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.754 13.75H29.918L24 24h11.836ZM12.164 24H24l-5.918-10.25H6.247ZM24 44.5l5.918-10.25L24 24l-5.918 10.25Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.247 34.25h11.835L24 24H12.164ZM35.836 24H24l5.918 10.25h11.836Z"></svg:path>`,
})
export class ArcticonsSnowIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
