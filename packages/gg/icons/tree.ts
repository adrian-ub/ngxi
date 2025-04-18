import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTreeIcon],svg[gg-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 17.9A5 5 0 0 1 7 13V7a5 5 0 0 1 10 0v6a5 5 0 0 1-4 4.9V21a1 1 0 1 1-2 0zM12 4a3 3 0 0 1 3 3v6a3 3 0 0 1-2 2.83V11a1 1 0 1 0-2 0v4.83A3 3 0 0 1 9 13V7a3 3 0 0 1 3-3" clip-rule="evenodd"></svg:path>`,
})
export class GgTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
