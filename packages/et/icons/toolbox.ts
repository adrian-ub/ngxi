import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etToolboxIcon],svg[et-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M41.5 17a.5.5 0 0 0-.5.5v13a.5.5 0 0 1-.5.5h-39a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 0-1 0v13c0 .827.673 1.5 1.5 1.5h39c.827 0 1.5-.673 1.5-1.5v-13a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M40.5 7h-39C.673 7 0 7.673 0 8.5v6a.5.5 0 0 0 .5.5H14v3.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5V15h13.5a.5.5 0 0 0 .5-.5v-6c0-.827-.673-1.5-1.5-1.5M27 18.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15h12zM41 14H1V8.5a.5.5 0 0 1 .5-.5h39a.5.5 0 0 1 .5.5zM15.5 0c-.827 0-1.5.673-1.5 1.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 1 0v-4c0-.827-.673-1.5-1.5-1.5z"></svg:path></svg:g>`,
})
export class EtToolboxIcon {
  readonly viewBox = input("0 0 42 32")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
