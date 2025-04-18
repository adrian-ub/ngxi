import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircle5Icon],svg[subway-part-of-circle-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0v256L75 75C28.6 121.3 0 185.3 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0"></svg:path>`,
})
export class SubwayPartOfCircle5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
