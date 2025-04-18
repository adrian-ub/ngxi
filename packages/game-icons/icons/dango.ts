import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDangoIcon],svg[game-icons-dango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M474.2 37.8c-21.6-21.6-56.2-21.6-77.8 0s-21.6 56.2 0 77.8s56.2 21.6 77.8 0s21.6-56.2 0-77.8m-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8s56.2 21.6 77.8 0c21.5-21.6 21.5-56.2 0-77.8m-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8s56.2 21.6 77.8 0c21.5-21.6 21.5-56.2 0-77.8m-96.5 83.7L21.62 477.6l12.73 12.8L209.5 315.3c-2.5-1.9-4.7-3.8-6.8-6c-2.2-2.1-4.1-4.3-6-6.8"></svg:path>`,
})
export class GameIconsDangoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
