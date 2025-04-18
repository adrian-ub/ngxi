import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrashcanIcon],svg[ix-trashcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 85.334H192V42.667h128zm-85.333 128H192V384h42.667zm85.333 0h-42.667V384H320zM448 128v42.667h-42.667v298.667H106.667V170.667H64V128zm-85.333 42.667H149.333v256h213.334z"></svg:path>`,
})
export class IxTrashcanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
