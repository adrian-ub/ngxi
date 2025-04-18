import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsPlayIcon],svg[zondicons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l12 6l-12 6z"></svg:path>`,
})
export class ZondiconsPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
