import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlayPauseFilledIcon],svg[ix-play-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 128l256 128l-256 128zM320 128h42.667v256H320Zm106.667 0h42.667v256h-42.667Z"></svg:path>`,
})
export class IxPlayPauseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
