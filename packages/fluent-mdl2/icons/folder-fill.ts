import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FolderFillIcon],svg[fluent-mdl2-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 64q26 0 45 19t19 45v992q0 57 20 93t44 67t44 67t20 93v480q0 26-19 45t-45 19H320V64z"></svg:path>`,
})
export class FluentMdl2FolderFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
