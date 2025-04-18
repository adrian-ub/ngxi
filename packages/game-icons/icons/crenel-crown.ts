import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCrenelCrownIcon],svg[game-icons-crenel-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 68.02L169.7 240.7l14.8 44.5l-17 5.6l-15.2-45.6l-66.42-53l-12.18 60.9l12.62 12.6l-12.66 12.6l-15.21-15.2l-30.53-20.4l25.15 163.4l39.17-65.2l89.66 35.8l30.9 46.4h86.4l30.9-46.4l89.7-35.8l39.1 65.2l25.2-163.4l-30.6 20.4l-15.2 15.2l-12.6-12.6l12.6-12.6l-12.2-60.9l-66.4 53l-15.2 45.6l-17-5.6l14.8-44.5zm0 122.58l55.7 92.8l1.9 3.2l-17.5 70l-20.4 20.3h-39.4l-20.4-20.3l-17.5-70zm0 34.8l-38.4 64l14.5 58l11.6 11.7h24.6l11.6-11.7l14.5-58z"></svg:path>`,
})
export class GameIconsCrenelCrownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
