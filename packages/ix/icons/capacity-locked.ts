import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCapacityLockedIcon],svg[ix-capacity-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h213.333v384H64zm42.667 341.333h128v-128h-128zm0-170.666h128v-128h-128zM320 192h128V64H320zm42.667-85.333h42.666v42.666h-42.666zM448 320c0-35.346-28.654-64-64-64s-64 28.654-64 64v42.667h-21.333v106.666h170.666V362.667H448zm-85.19-2.488c1.232-10.61 10.25-18.845 21.19-18.845l2.488.143c10.61 1.233 18.845 10.25 18.845 21.19v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityLockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
