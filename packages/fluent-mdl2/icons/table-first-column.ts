import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableFirstColumnIcon],svg[fluent-mdl2-table-first-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm1920 512V256h-512v384zM768 256v384h512V256zm0 1024v384h512v-384zm0-128h512V768H768zm640-384v384h512V768zm0 896h512v-384h-512z"></svg:path>`,
})
export class FluentMdl2TableFirstColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
