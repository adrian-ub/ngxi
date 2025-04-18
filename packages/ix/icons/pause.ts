import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPauseIcon],svg[ix-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 128h42.667v256h-42.667zm128 0h42.667v256h-42.667z"></svg:path>`,
})
export class IxPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
