import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MoveToFolderIcon],svg[fluent-mdl2-move-to-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1120q0 31 9 54t24 44t31 41t31 45t23 58t10 78v480q0 27-10 50t-27 40t-41 28t-50 10H256V0h1408q27 0 50 10t40 27t28 41t10 50v384h-128V128H384v1792h1152v-480q0-45 9-77t24-58t31-46t31-40t23-44t10-55V896h128zm0 320q0-24-4-42t-13-33t-20-29t-27-32q-15 17-26 31t-20 30t-13 33t-5 42v480h128zm256-800v128h-677l162 163l-90 90l-317-317l317-317l90 90l-162 163z"></svg:path>`,
})
export class FluentMdl2MoveToFolderIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
