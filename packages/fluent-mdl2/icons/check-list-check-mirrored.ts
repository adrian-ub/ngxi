import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckListCheckMirroredIcon],svg[fluent-mdl2-check-list-check-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1728 1621l211-210l90 90l-301 301l-173-173l90-90zm301-1272l-301 301l-173-173l90-90l83 82l211-210zm-301 504l211-210l90 90l-301 301l-173-173l90-90zm0 384l211-210l90 90l-301 301l-173-173l90-90z"></svg:path>`,
})
export class FluentMdl2CheckListCheckMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
