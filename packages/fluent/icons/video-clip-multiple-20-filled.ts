import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoClipMultiple20FilledIcon],svg[fluent-video-clip-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3zM7 6.756a.75.75 0 0 1 1.171-.62l3.61 2.451a.5.5 0 0 1 .001.827l-3.61 2.458A.75.75 0 0 1 7 11.252zM6.5 17a2.5 2.5 0 0 1-2-1H14a3 3 0 0 0 3-3V5.5c.607.456 1 1.182 1 2V13a4 4 0 0 1-4 4z"></svg:path>`,
})
export class FluentVideoClipMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
