import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTable2Icon],svg[ri-table-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10v4h6v-4zm-2 0H5v4h6zm2 9h6v-3h-6zm-2 0v-3H5v3zm2-14v3h6V5zm-2 0H5v3h6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
