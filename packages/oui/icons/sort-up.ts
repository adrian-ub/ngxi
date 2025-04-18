import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSortUpIcon],svg[oui-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.207v8.237c0 .307-.224.556-.5.556s-.5-.249-.5-.556V4.207L2.904 8.303a.5.5 0 0 1-.707-.707l4.242-4.242a1.5 1.5 0 0 1 2.122 0l4.242 4.242a.5.5 0 1 1-.707.707z"></svg:path>`,
})
export class OuiSortUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
