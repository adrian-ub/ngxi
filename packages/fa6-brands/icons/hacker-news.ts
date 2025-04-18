import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsHackerNewsIcon],svg[fa6-brands-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v448h448V32zm21.2 197.2H21c.1-.1.2-.3.3-.4c0 .1 0 .3-.1.4m218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6c12.3-27 5.8-24.4 60.6-125.6H320z"></svg:path>`,
})
export class Fa6BrandsHackerNewsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
