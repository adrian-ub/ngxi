import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GripperBarVerticalIcon],svg[fluent-mdl2-gripper-bar-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 2048V0h128v2048zM1152 0h128v2048h-128z"></svg:path>`,
})
export class FluentMdl2GripperBarVerticalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
