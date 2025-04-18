import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinTopStoriesIcon],svg[icon-park-solid-weixin-top-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 4l7.2 7.53L41.32 14L38.4 24l2.92 10l-10.12 2.47L24 44l-7.2-7.53L6.68 34L9.6 24L6.68 14l10.12-2.47z"></svg:path><svg:path fill="currentColor" d="m30.977 11.915l.395 7.829L37.954 24l-6.582 4.256l-.395 7.829L24 32.512l-6.977 3.573l-.395-7.829L10.045 24l6.583-4.256l.395-7.829L24 15.488z"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinTopStoriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
