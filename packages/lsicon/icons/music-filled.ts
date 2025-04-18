import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMusicFilledIcon],svg[lsicon-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.933v8.419h-.002l.002.097a2 2 0 1 1-1-1.732V5.3l-7 1v5.698a2 2 0 1 1-1-1.733V3.07zM6 5.29l7-1V3.067l-7 .884z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMusicFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
