import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSortIcon],svg[vaadin-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H5l3-4zM5 9h6l-3 4z"></svg:path>`,
})
export class VaadinSortIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
