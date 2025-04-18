import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLeafFill12Icon],svg[garden-leaf-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.707 10L.854 11.854a.5.5 0 0 1-.708-.708L2 9.293V5.5C2 2.462 5.5 0 11.5 0a.5.5 0 0 1 .5.5C12 6.497 9.538 10 6.5 10zM5 6.293L3.146 8.146a.5.5 0 1 0 .708.708L5.707 7H7.5a.5.5 0 0 0 0-1h-.793l2.147-2.146a.5.5 0 1 0-.708-.708L6 5.293V4.5a.5.5 0 0 0-1 0z"></svg:path>`,
})
export class GardenLeafFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
