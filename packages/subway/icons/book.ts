import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBookIcon],svg[subway-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 124.7L256 18L0 124.7l256 106.7zM256 274l-144.9-67.6L0 252.7l256 106.7l256-106.7l-111.1-46.3zm0 128l-139.6-69.8L0 380.7l256 106.7l256-106.7l-116.4-48.5z"></svg:path>`,
})
export class SubwayBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
