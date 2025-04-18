import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMongoliaIcon],svg[game-icons-mongolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.83 183.4l73.19-29.3L165.6 185c6.3-17 8.6-42.6 26.3-44.3c22.3-2.1 42.9 15.1 47.1 39.9l54-1.6l54.5 22.8l55-35.2l32.3 7.9s-20.3 32.6-9.7 42.4c9.1 8.5 35.5-10.9 35.5-10.9l32.6 22.1l-87.1 62.7c-6.7-4.7-16.4-13.5-27.1-5c-9.9 7.9-6 21.9 1 33.8c-32.9 31-71 43-109.8 51.7l-127.8-30l-92.59-70c9.92-34.7-14.36-61-30.98-87.9"></svg:path>`,
})
export class GameIconsMongoliaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
