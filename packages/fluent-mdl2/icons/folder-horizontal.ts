import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FolderHorizontalIcon],svg[fluent-mdl2-folder-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 256q45 0 77 9t58 24t46 31t40 31t44 23t55 10h992q27 0 50 10t40 27t28 41t10 50v1280H0V384q0-27 10-50t27-40t41-28t50-10zM128 384v128h480q24 0 42-4t33-13t29-20t32-27q-17-15-31-26t-30-20t-33-13t-42-5zm1792 128H928q-31 0-54 9t-44 24t-41 31t-45 31t-58 23t-78 10H128v1024h1792z"></svg:path>`,
})
export class FluentMdl2FolderHorizontalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
