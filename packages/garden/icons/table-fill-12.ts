import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTableFill12Icon],svg[garden-table-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="11" height="11" x=".5" y=".5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M.5.5h11V3H.5zM.5 5h11v1H.5zm0 3h11v1H.5zM3 2.5h1v9H3zm3 0h1v9H6z"></svg:path>`,
})
export class GardenTableFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
