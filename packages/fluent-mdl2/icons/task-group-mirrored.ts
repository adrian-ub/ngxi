import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TaskGroupMirroredIcon],svg[fluent-mdl2-task-group-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256v896h2048V256zm128 128h1792v640H128zm128 256h1024V512H256zm384 256h640V768H640zm768 0h384V512h-384zm128-256h128v128h-128zm256 640H256v128h1536zm-256 256H512v128h1024z"></svg:path>`,
})
export class FluentMdl2TaskGroupMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
