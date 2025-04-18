import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTableFill16Icon],svg[garden-table-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15" height="15" x=".5" y=".5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M.5.5h15V4H.5zm4.5 3h1v12H5zm5 0h1v12h-1zM.5 7h15v1H.5zm0 4h15v1H.5z"></svg:path>`,
})
export class GardenTableFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
