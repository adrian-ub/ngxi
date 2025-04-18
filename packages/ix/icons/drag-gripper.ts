import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDragGripperIcon],svg[ix-drag-gripper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M181.333 149.333c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m149.334 0c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32m-117.334 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m117.334 32c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32m-117.334 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m117.334 32c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxDragGripperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
