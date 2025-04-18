import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImportMirroredIcon],svg[fluent-mdl2-import-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1497 589l308 309H262v128h1540l-305 305l90 90l461-461l-461-461zM134 512H6v896h128z"></svg:path>`,
})
export class FluentMdl2ImportMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
