import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFolderSignIcon],svg[el-folder-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M390.527 312.012h154.468l50.024 64.453H958.3v511.523H241.699V376.465h98.804z"></svg:path>`,
})
export class ElFolderSignIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
