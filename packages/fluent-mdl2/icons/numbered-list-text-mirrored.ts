import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NumberedListTextMirroredIcon],svg[fluent-mdl2-numbered-list-text-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1536v-128h1536v128zm0-512V896h1536v128zm0-640h1536v128H0z"></svg:path>`,
})
export class FluentMdl2NumberedListTextMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
