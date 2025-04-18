import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMapVerticalIcon],svg[codicon-map-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.777 2.5h6.32l-1.874 3h-6.32zm-1.875 4h6.32l1.876 3h-6.32zM11.09 6l2.334-3.735L13 1.5H5.5l-.424.235l-2.5 4v.53L4.91 10l-2.334 3.735L3 14.5h7.5l.424-.235l2.5-4v-.53zm-5.313 4.5h6.32l-1.874 3h-6.32z"></svg:path>`,
})
export class CodiconMapVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
