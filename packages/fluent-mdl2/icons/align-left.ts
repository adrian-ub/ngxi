import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignLeftIcon],svg[fluent-mdl2-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v128H0V128zm0 1664H0v-128h2048zm0-768H0V896h2048zm-512-384H0V512h1536zm0 768H0v-128h1536z"></svg:path>`,
})
export class FluentMdl2AlignLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
