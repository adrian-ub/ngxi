import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPlayIcon],svg[subway-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512l512-256z"></svg:path>`,
})
export class SubwayPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
