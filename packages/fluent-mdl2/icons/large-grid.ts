import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LargeGridIcon],svg[fluent-mdl2-large-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1664v1664H128zm1536 128H256v640h1408zM256 1024v640h640v-640zm768 640h640v-640h-640z"></svg:path>`,
})
export class FluentMdl2LargeGridIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
