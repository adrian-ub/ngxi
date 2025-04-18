import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortUpOutlineIcon],svg[teenyicons-sort-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5.5l.354-.354a.5.5 0 0 0-.708 0zM3.146.146l-3 3l.708.708l3-3zm0 .708l3 3l.708-.708l-3-3zM3 .5V15h1V.5zM9 4h6V3H9zm0 4h4V7H9zm0 4h2v-1H9z"></svg:path>`,
})
export class TeenyiconsSortUpOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
