import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsSquareHackerNewsIcon],svg[fa6-brands-square-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM21 229.2s.1-.1.1-.2s.1-.2.2-.2c0 .1 0 .3-.1.4zM239.2 384h-31.4V281.3L128 128h37.3c41.5 77.7 48.1 95.8 54.1 112c1.6 4.3 3.1 8.5 5.2 13.6c3.2-7 5.1-11.9 7.1-17.3c5.9-15.3 12.8-33.2 53.5-108.3H320l-80.8 155.1z"></svg:path>`,
})
export class Fa6BrandsSquareHackerNewsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
