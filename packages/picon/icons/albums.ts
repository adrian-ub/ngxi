import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlbumsIcon],svg[picon-albums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6c0-2 6-2 6 0S1 8 1 6m4 0l-1-.5L3 6l1 .5M8 8V4H0v4m2-8h4l1 1H1m0 1h6l1 1H0"></svg:path>`,
})
export class PiconAlbumsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
