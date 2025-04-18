import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeleteRowsMirroredIcon],svg[fluent-mdl2-delete-rows-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1150 128h896V0H1022v512h128zM635 960l320 320h1091V640H954zm515 448h-128v512h1024v-128h-896zM91 1277l227-227l227 227l90-90l-227-227l227-227l-91-90l-226 226L91 643L1 733l226 227L0 1187z"></svg:path>`,
})
export class FluentMdl2DeleteRowsMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
