import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlayPauseIcon],svg[ix-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 128l256 128l-256 128zm42.667 64v128l128-63.992zM320 128h42.667v256H320Zm106.667 0h42.667v256h-42.667Z"></svg:path>`,
})
export class IxPlayPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
