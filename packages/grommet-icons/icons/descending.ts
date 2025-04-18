import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDescendingIcon],svg[grommet-icons-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.92 16.714l-.354.353l-.354-.353L7 12.502l.707-.708l3.359 3.359V7h1v8.153l3.358-3.359l.707.708z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
