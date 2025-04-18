import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAscendingIcon],svg[grommet-icons-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.08 7.286l.354-.353l.354.353L17 11.498l-.707.708l-3.358-3.359V17h-1V8.847l-3.359 3.359l-.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
