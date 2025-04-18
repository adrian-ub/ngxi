import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerFilledIcon],svg[lsicon-computer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-4v2H11v1H5v-1h1.5v-2h-4a.5.5 0 0 1-.5-.5zM7.5 13h1v-2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
