import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedListBulletIcon],svg[fluent-mdl2-bulleted-list-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1664v-128h128v128zm0-384v-128h128v128zm0-896h128v128H0zm0 512V768h128v128z"></svg:path>`,
})
export class FluentMdl2BulletedListBulletIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
