import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckListTextIcon],svg[fluent-mdl2-check-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1664v-128h1408v128zm0-384v-128h1408v128zm0-896h1408v128H640zm0 512V768h1408v128z"></svg:path>`,
})
export class FluentMdl2CheckListTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
