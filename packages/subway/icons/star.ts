import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStarIcon],svg[subway-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 207.9H315.1L256 11l-59.1 196.9H0l157.5 108.3l-59 187.1L256 404.8l157.5 98.5l-59-187.1z"></svg:path>`,
})
export class SubwayStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
