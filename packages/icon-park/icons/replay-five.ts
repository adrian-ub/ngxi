import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReplayFiveIcon],svg[icon-park-replay-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.6141 12.9301 6 17 6 17"></svg:path><svg:path d="M6 9V17H14"></svg:path><svg:path d="M28 18H21V23.7098C21.9845 23.0633 22.4689 23 24 23C27 23 28 24.9886 28 28C28 31.0114 26 32 24 32C22.5 32 21 31 21 30"></svg:path></svg:g>`,
})
export class IconParkReplayFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
