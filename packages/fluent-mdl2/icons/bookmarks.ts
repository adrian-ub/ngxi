import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BookmarksIcon],svg[fluent-mdl2-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512V384h128v128zm384-128h1664v128H384zM0 1664v-128h128v128zm384 0v-128h1664v128zm512-768V768h1152v128zm512 384v-128h640v128z"></svg:path>`,
})
export class FluentMdl2BookmarksIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
