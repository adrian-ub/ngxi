import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBroadcastIcon],svg[bi-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.05 3.05a7 7 0 0 0 0 9.9a.5.5 0 0 1-.707.707a8 8 0 0 1 0-11.314a.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656a.5.5 0 1 1-.708.708a5 5 0 0 1 0-7.072a.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0a5 5 0 0 1 0 7.072a.5.5 0 1 1-.708-.708a4 4 0 0 0 0-5.656a.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0a8 8 0 0 1 0 11.313a.5.5 0 0 1-.707-.707a7 7 0 0 0 0-9.9a.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class BiBroadcastIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
