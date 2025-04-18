import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouseWirelessSolidIcon],svg[streamline-mouse-wireless-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a5 5 0 0 1 10 0v4A5 5 0 0 1 2 9zm5.625-1.5a.625.625 0 1 0-1.25 0V5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMouseWirelessSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
