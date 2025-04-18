import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2F12DevToolsIcon],svg[fluent-mdl2-f-12-dev-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1280h-86l-128-128h86V384H128v1024h512v128H0V256zm-267 1280h-576q-218 219-437 437V523zm-309-128L896 832v832l256-256z"></svg:path>`,
})
export class FluentMdl2F12DevToolsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
