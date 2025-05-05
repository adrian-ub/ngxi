import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleFilledIcon],svg[tdesign-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M8.75 16.5l8-4.5l-8-4.5z"></svg:path>`,
})
export class TdesignPlayCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
