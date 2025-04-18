import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPlay1Icon],svg[subway-play-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464.7 221.5L86.1 7.3C52.5-11.7 25 7.5 25 50v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1"></svg:path>`,
})
export class SubwayPlay1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
