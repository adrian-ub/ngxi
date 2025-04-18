import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BookmarksMirroredIcon],svg[fluent-mdl2-bookmarks-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 512V384h-128v128zm-384-128H0v128h1664zm384 1280v-128h-128v128zm-384 0v-128H0v128zm-512-768V768H0v128zm-512 384v-128H0v128z"></svg:path>`,
})
export class FluentMdl2BookmarksMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
