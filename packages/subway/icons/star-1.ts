import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStar1Icon],svg[subway-star-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 206.8H315.1L256 9.8l-59.1 196.9H0L157.5 315l-59 187.2L256 403.7l157.5 98.5l-59.1-187.1zM256 354.5l-88.6 59.1l39.4-108.3l-78.8-59.1h98.5l29.5-98.5l29.5 98.5H384l-78.8 59.1l39.4 108.3z"></svg:path>`,
})
export class SubwayStar1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
