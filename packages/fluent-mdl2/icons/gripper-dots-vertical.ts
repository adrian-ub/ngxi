import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GripperDotsVerticalIcon],svg[fluent-mdl2-gripper-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 384h256v256h-256zm0 768V896h256v256zm0 512v-256h256v256zM640 640V384h256v256zm0 512V896h256v256zm0 512v-256h256v256z"></svg:path>`,
})
export class FluentMdl2GripperDotsVerticalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
