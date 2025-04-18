import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPlayFilledIcon],svg[lsicon-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.901 7L6 4.066v7.868z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPlayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
