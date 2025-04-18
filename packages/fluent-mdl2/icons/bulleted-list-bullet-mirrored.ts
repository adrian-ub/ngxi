import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedListBulletMirroredIcon],svg[fluent-mdl2-bulleted-list-bullet-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1280v-128h128v128zm0 384v-128h128v128zm0-768V768h128v128zm0-512h128v128h-128z"></svg:path>`,
})
export class FluentMdl2BulletedListBulletMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
