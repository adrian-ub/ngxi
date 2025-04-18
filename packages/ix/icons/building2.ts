import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBuilding2Icon],svg[ix-building2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 64v341.333h128V192H320v-42.667h128v256h21.334V448H64v-.001L42.667 448v-42.667H64V64zm-42.667 42.667h-128v298.666h42.667v-64H192v64h42.667zm128 213.333v42.667H320V320zM192 234.667v42.666h-42.666v-42.666zm170.667 0v42.666H320v-42.666zM192 149.333V192h-42.666v-42.667z"></svg:path>`,
})
export class IxBuilding2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
