import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeAddFilledIcon],svg[tdesign-play-circle-stroke-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11c0 .99-.13 1.95-.376 2.863a5.5 5.5 0 0 0-7.761 7.761C13.95 22.869 12.99 23 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m4.803 11L9.5 7.13v9.737z"></svg:path><svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class TdesignPlayCircleStrokeAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
