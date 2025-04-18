import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLoopIcon],svg[carbon-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.59 19.41L26 22h-5v2h5l-2.41 2.59L25 28l5-5l-5-5zM13 6a9 9 0 0 0-7.48 14l1.66-1.11A7 7 0 1 1 13 22H2v2h11a9 9 0 0 0 0-18"></svg:path>`,
})
export class CarbonLoopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
