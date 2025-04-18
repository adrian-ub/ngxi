import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeAddIcon],svg[tdesign-play-circle-stroke-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18h1v2h-1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11v1h-2v-1a9 9 0 0 0-9-9M9.5 7.131L16.803 12L9.5 16.869zm2 3.737v2.264L13.197 12zM20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignPlayCircleStrokeAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
