import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircle4Icon],svg[subway-part-of-circle-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0v256H0c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0"></svg:path>`,
})
export class SubwayPartOfCircle4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
