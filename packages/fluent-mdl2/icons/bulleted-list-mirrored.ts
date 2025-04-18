import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedListMirroredIcon],svg[fluent-mdl2-bulleted-list-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1280v-128h-128v128zm0-384V768h-128v128zm-384 0V768H0v128zm384-384V384h-128v128zm-384-128H0v128h1664zm0 896v-128H0v128zm384 384v-128h-128v128zm-384 0v-128H0v128z"></svg:path>`,
})
export class FluentMdl2BulletedListMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
