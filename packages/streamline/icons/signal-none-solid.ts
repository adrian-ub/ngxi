import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalNoneSolidIcon],svg[streamline-signal-none-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 13.25a.75.75 0 0 1 .75-.75h2.375a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75m10.116 0a.75.75 0 0 1 .75-.75h2.375a.75.75 0 0 1 0 1.5h-2.375a.75.75 0 0 1-.75-.75m-4.303-.75a.75.75 0 0 0 0 1.5h2.374a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalNoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
