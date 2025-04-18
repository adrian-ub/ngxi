import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedListIcon],svg[fluent-mdl2-bulleted-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1280v-128h128v128zm0-384V768h128v128zm384 0V768h1664v128zM0 512V384h128v128zm384-128h1664v128H384zm0 896v-128h1664v128zM0 1664v-128h128v128zm384 0v-128h1664v128z"></svg:path>`,
})
export class FluentMdl2BulletedListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
