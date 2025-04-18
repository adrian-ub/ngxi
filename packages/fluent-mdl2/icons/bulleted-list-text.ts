import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedListTextIcon],svg[fluent-mdl2-bulleted-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1280v-128h1664v128zm0 384v-128h1664v128zm0-768V768h1664v128zm0-512h1664v128H384z"></svg:path>`,
})
export class FluentMdl2BulletedListTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
