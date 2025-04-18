import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPlayIcon],svg[ls-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 49v605c0 11 5 20 15 26c4 3 11 4 16 4s9-1 14-4l524-302c10-7 16-16 16-27c0-10-6-19-16-26L45 23C27 10 0 26 0 49"></svg:path>`,
})
export class LsPlayIcon {
  readonly viewBox = input("0 0 585 684")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
