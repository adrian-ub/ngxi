import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NumberedListTextIcon],svg[fluent-mdl2-numbered-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1536v-128h1536v128zm0-1152h1536v128H512zm0 640V896h1536v128z"></svg:path>`,
})
export class FluentMdl2NumberedListTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
