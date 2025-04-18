import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DatabaseViewIcon],svg[fluent-mdl2-database-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280v-128h1152v128zM384 0h1664v1536h-256v-128h128V384H384zm1536 256V128H512v128zM0 2048V512h1664v1536zM128 640v128h1408V640zm0 256v1024h1408V896z"></svg:path>`,
})
export class FluentMdl2DatabaseViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
