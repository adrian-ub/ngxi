import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLoadingIcon],svg[streamline-signal-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 9.5L.5 7L3 4.5m8 5L13.5 7L11 4.5M7 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-5 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path>`,
})
export class StreamlineSignalLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
