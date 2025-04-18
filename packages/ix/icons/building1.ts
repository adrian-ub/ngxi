import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBuilding1Icon],svg[ix-building1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64v85.333H448v256h21.334V448l-106.667-.001V448H149.334l-.001-.001L42.667 448v-42.667H64v-192h85.333V64zM320 106.667H192v298.666h42.667v-64h42.667v64H320zM405.334 192h-42.667v213.333h42.667zm-256 64h-42.667v149.333h42.667zm128-21.333v42.666h-42.667v-42.666zm0-85.334V192h-42.667v-42.667z"></svg:path>`,
})
export class IxBuilding1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
