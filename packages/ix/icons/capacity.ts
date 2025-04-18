import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCapacityIcon],svg[ix-capacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H64v384h384V234.667H277.333zm-42.666 341.333h-128v-128h128zm0-170.666h-128v-128h128zm170.666 42.666v128h-128v-128zM448 64v128H320V64zm-42.667 42.667h-42.666v42.666h42.666z"></svg:path>`,
})
export class IxCapacityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
