import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TaskManagerIcon],svg[fluent-mdl2-task-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1792H0zm1920 128H128v256h1792zM128 1792h1792V640H128zm128-640V768h384v384zm128-256v128h128V896zm-128 768v-384h384v384zm128-256v128h128v-128zm512-384V896h768v128zm0 512v-128h768v128z"></svg:path>`,
})
export class FluentMdl2TaskManagerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
